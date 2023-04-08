import fastJson from "fast-json-stringify";
import parse from "secure-json-parse";
import { PiniaSession } from "./session/PiniaSession";
import { PiniaLocal } from "./local/PiniaLocal";
import { Store } from "pinia";
import { DebuggerEvent, toRaw } from "vue";

export interface WhiteList {
  session: Set<string>;
  local: Set<string>;
}
export type HandlerType = PiniaSession | PiniaLocal;
/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230406
 * @version:0.0.1
 * @type:class
 * @description: the core of pinia-storage
 * ----------------------------------------------
 * 😁Core method:
 * 1. init()
 * 2. persist()
 * 3. update()
 * 4. watch()
 *----------------------------------------------
 * 🤝dependies:
 * 1. fast-json-stringify:faster than Json.stringify
 * 2. secure-json-parse: faster and smarter than Json.parse
 * ============================================
 */
export class PiniaStorage {
  /**
   * target pinia
   */
  private pinia?: Store;
  private sessionHandler: PiniaSession;
  private localHandler: PiniaLocal;
  /**
   * white list
   */
  private storageWhiteList: WhiteList;

  constructor(pinia?: Store) {
    if (pinia) {
      this.pinia = pinia;
    }
    this.sessionHandler = new PiniaSession();
    this.localHandler = new PiniaLocal();
    this.storageWhiteList = {
      session: new Set<string>(),
      local: new Set<string>(),
    };
    this.initWhiteList();
    this.envCan();
  }
  /**
   * judge the environment
   */
  private envCan = () => {
    this.sessionHandler.envCan();
    this.localHandler.envCan();
  };

  /**
   * init function use sessionStorage
   * 初始化，使用sessionStorage,if sessionStorage has target key,it will return the key's value
   * @param storeName pinia仓库的唯一ID Unique ID
   * @param key 键
   * @param value 值
   * @param scheme 序列化scheme
   * @example
   * if you value is: user={id:1,username:'pinia'}
   *  ↓↓↓↓↓👇↓↓↓↓↓
   * scheme={title:'user',type:'object',properties:{id:{type:'number'},username:{type:'string'}}}
   */
  public init = (
    storeName: string,
    key: string,
    value: any,
    scheme: Object
  ): any => {
    let keyName = storeName + "-" + key;
    //add to session white list
    this.storageWhiteList.session.add(keyName);

    //store scheme
    this.sessionHandler.set(keyName + "--scheme", JSON.stringify(scheme));
    let exist = this.isExist(keyName, true);

    if (exist && exist != true) {
      return parse(exist);
    } else {
      const json = fastJson(scheme);

      this.sessionHandler.set(keyName, json(value));
      return value;
    }
  };

  /**
   * init function use sessionStorage
   * 初始化，使用sessionStorage,if sessionStorage has target key,it will return the key's value
   * @param storeName pinia仓库的唯一ID Unique ID
   * @param key 键
   * @param value 值
   * @param scheme 序列化scheme
   * @example
   * if you value is: user={id:1,username:'pinia'}
   *  ↓↓↓↓↓👇↓↓↓↓↓
   * scheme={title:'user',type:'object',properties:{id:{type:'number'},username:{type:'string'}}}
   */
  public persist = (
    storeName: string,
    key: string,
    value: any,
    scheme: Object
  ): any => {
    let keyName = storeName + "-" + key;
    //add to session white list
    this.storageWhiteList.local.add(keyName);

    //store scheme
    this.localHandler.set(keyName + "--scheme", JSON.stringify(scheme));
    let exist = this.isExist(keyName, false);

    if (exist && exist != true) {
      return parse(exist);
    } else {
      const json = fastJson(scheme);

      this.localHandler.set(keyName, json(value));
      return value;
    }
  };
  /**
   * init wihte list
   */
  private initWhiteList = () => {
    //check sessionStorage and localStorage to find and set into white list
    let sessionKeys = this.sessionHandler.forEeah();
    let localKeys = this.localHandler.forEeah();
    if (sessionKeys.length != 0) {
      sessionKeys.forEach((sk) => {
        this.storageWhiteList.session.add(sk);
      });
    }
    if (localKeys.length != 0) {
      localKeys.forEach((lk) => {
        this.storageWhiteList.local.add(lk);
      });
    }
  };
  /**
   * Determine whether the key exists and return JSON data, otherwise return false
   * 判断是否存在key存在返回json数据，否则返回false
   * @param keyName 键key
   * @returns  boolean | string
   */
  public isExist = (keyName: string, type: boolean): boolean | string => {
    if (type) {
      return this.sessionHandler.get(keyName) ?? false;
    } else {
      return this.localHandler.get(keyName) ?? false;
    }
  };

  public update = (change: Function) => {
    this.pinia?.$patch(change);
  };
  /**
   * Monitoring update subscription changes
   * 监控更新订阅变化
   * @param store
   */
  public watch = () => {
    this.pinia?.$subscribe((mutation, state) => {
      //actually events is a Array<DebuggerEvent>
      let events: any = mutation.events;

      //get change and update storage
      events.forEach((e: DebuggerEvent) => {
        //check scheme
        let updateTarget: any;
        let keyName: string;
        if (!this.checkScheme(this.pinia!.$id, e.key)) {
          //get target
          updateTarget = e.target;
          let flag = -1;
          Object.values(state).forEach((k, index) => {
            if (Object.is(updateTarget, toRaw(k))) {
              flag = index;
            }
          });
          if (flag == -1) {
            throw new Error("the param may not in state!");
          } else {
            let targetKey = Object.keys(state)[flag];
            keyName = this.pinia?.$id + "-" + targetKey;
          }
        } else {
          updateTarget = e.newValue;
          keyName = this.pinia?.$id + "-" + e.key;
        }
        this.updateStorage(keyName, updateTarget, this.checkWhiteList(keyName));
      });
    });
  };
  /**
   * 检查scheme类型，object和array返回false，原始类型返回true
   * @param prefix
   * @param key
   * @returns
   */
  private checkScheme = (prefix: string, key: string): boolean => {
    let keyName = prefix + "-" + key;
    let schemeName = keyName + "--scheme";

    let schemeJson: string | null = "";
    try {
      if (this.checkWhiteList(keyName)) {
        schemeJson = this.sessionHandler.get(schemeName);
      } else {
        schemeJson = this.localHandler.get(schemeName);
      }
    } catch (error) {
      return false;
    }
    if (schemeJson == null) {
      throw new Error("please check the scheme");
    } else {
      let scheme = parse(schemeJson);
      if (scheme.type != "array" || scheme.type != "object") {
        return true;
      }
      return false;
    }
  };

  /**
   * this function will check storageWhiteList and find where the key in
   * if return true -> session , false -> local
   * @param keyName
   * @returns true -> session , false -> local
   */
  private checkWhiteList = (keyName: string): boolean => {
    //查找keyName在localStorage中还是SessionStorage中(查找白名单)
    //在session中flag = 0，local中flag = 1

    let whiteListFlag = -1;
    this.storageWhiteList.session.forEach((k) => {
      if (k == keyName) {
        whiteListFlag = 0;
      }
    });
    this.storageWhiteList.local.forEach((k) => {
      if (k == keyName) {
        whiteListFlag = 1;
      }
    });
    if (whiteListFlag == -1) {
      throw new Error(
        "the param may not in store in session or local! but this may system error,after your check ,if this is a system error , please send an email to author:syf20020816@outlook.com"
      );
    }

    if (whiteListFlag == 0) {
      return true;
    } else {
      return false;
    }
  };
  /**
   * updateStorage(local/session)
   * @param keyName
   * @param value
   * @param storageType true-> update session | false -> update local
   */
  private updateStorage = (
    keyName: string,
    value: any,
    storageType: boolean
  ): void => {
    if (storageType) {
      //get scheme by keyName
      let schemeJson = this.sessionHandler.get(keyName + "--scheme");
      if (schemeJson != null) {
        let scheme = parse(schemeJson);
        let json = fastJson(scheme);
        this.sessionHandler.set(keyName, json(value));
      } else {
        throw new Error("scheme is null,please check your scheme");
      }
    } else {
      let schemeJson = this.localHandler.get(keyName + "--scheme");
      if (schemeJson != null) {
        let scheme = parse(schemeJson);
        let json = fastJson(scheme);
        this.localHandler.set(keyName, json(value));
      } else {
        throw new Error("scheme is null,please check your scheme");
      }
    }
  };
}

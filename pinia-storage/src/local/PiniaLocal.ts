/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230406
 * @version:0.0.1
 * @type:interface
 * @description: handle localStorage
 * ============================================
 */
import { StorageHandler } from "../super/StorageHandler";

export class PiniaLocal implements StorageHandler {
  public forEeah(): Array<string> {
    let tmpArr = new Array<string>();
    for (let i = 0; i < this.length(); i++) {
      let key = window.localStorage.key(i);
      if (!key?.includes("--scheme") && key != null) {
        tmpArr.push(key);
      }
    }
    return tmpArr;
  }
  public envCan(): boolean {
    if (!window.localStorage) {
      throw new Error(
        "your browser do not support localStorage! please update the latest version"
      );
    }
    return true;
  }
  public length(): number {
    return window.localStorage.length;
  }
  public get(key: string): string | null {
    return window.localStorage.getItem(key);
  }
  public set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
  public remove(key: string): void {
    window.localStorage.removeItem(key);
  }
  public clear(): void {
    window.localStorage.clear();
  }
}

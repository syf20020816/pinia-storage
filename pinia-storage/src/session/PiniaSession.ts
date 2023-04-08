/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230406
 * @version:0.0.1
 * @type:interface
 * @description: handle sessionStorage
 * ============================================
 */
import { StorageHandler } from "../super/StorageHandler";

export class PiniaSession implements StorageHandler {
  public forEeah(): Array<string> {
    let tmpArr = new Array<string>();
    for (let i = 0; i < this.length(); i++) {
      let key = window.sessionStorage.key(i);
      if (!key?.includes("--scheme") && key != null) {
        tmpArr.push(key);
      }
    }
    return tmpArr;
  }
  public envCan(): boolean {
    if (!window.sessionStorage) {
      throw new Error(
        "your browser do not support sessionStorage! please update the latest version"
      );
    }
    return true;
  }
  public length(): number {
    return window.sessionStorage.length;
  }
  public get(key: string): string | null {
    return window.sessionStorage.getItem(key);
  }
  public set(key: string, value: string): void {
    window.sessionStorage.setItem(key, value);
  }
  public remove(key: string): void {
    window.sessionStorage.removeItem(key);
  }
  public clear(): void {
    window.sessionStorage.clear();
  }
}

/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230406
 * @version:0.0.1
 * @type:interface
 * @description: the super interface for PiniaSession and PiniaLocal
 * ============================================
 */
export interface StorageHandler {
  /**
   * 封装getItem
   * @param key
   */
  get(key: string): string | null;
  /**
   * 封装setItem
   * @param key
   * @param value
   */
  set(key: string, value: string): void;
  /**
   * 封装removeItem
   * @param key
   */
  remove(key: string): void;
  /**
   * 封装clear
   */
  clear(): void;
  /**
   * 封装获取长度
   */
  length(): number;
  /**
   * 封装环境是否支持
   */
  envCan(): boolean;
  forEeah(): Array<string>;
}

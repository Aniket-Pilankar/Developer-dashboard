export interface DictionaryNum<T> {
  [id: number]: T | undefined;
}
/**
 * @public
 */
export interface Dictionary<T> extends DictionaryNum<T> {
  [id: string]: T | undefined;
}

export type PartialConstruction<T, R extends Partial<T>> = Omit<T, keyof R> & R;

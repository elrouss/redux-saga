export type TActionCreator<T extends string, U = unknown> = (payload?: U) => {
    type: T;
    payload?: U;
};

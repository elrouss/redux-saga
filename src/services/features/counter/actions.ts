import { INCREASE_COUNTER, DECREASE_COUNTER } from './constants';

import type { TActionCreator } from '@/services/types';

export const increaseCounter: TActionCreator<typeof INCREASE_COUNTER> = () => ({
    type: INCREASE_COUNTER,
});

export const decreaseCounter: TActionCreator<typeof DECREASE_COUNTER> = () => ({
    type: DECREASE_COUNTER,
});

export type TActions =
    | ReturnType<typeof increaseCounter>
    | ReturnType<typeof decreaseCounter>;

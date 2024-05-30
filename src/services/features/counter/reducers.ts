import { INCREASE_COUNTER, DECREASE_COUNTER } from './constants';
import type { TActions } from './actions';

type TInitialState = {
    value: number;
};

const initialState: TInitialState = {
    value: 0,
} as const;

export const counter = (
    state = initialState,
    action: TActions
): TInitialState => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, value: state.value + 1 };
        case DECREASE_COUNTER:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
};

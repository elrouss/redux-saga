import styles from './counter.module.scss';

import { useAppSelector, useAppDispatch } from '@/services/app/hooks';

import {
    increaseCounter,
    decreaseCounter,
} from '@/services/features/counter/actions';
import { getCounterValue } from '@/services/features/counter/selectors';

export const Counter = () => {
    const dispatch = useAppDispatch();

    const value = useAppSelector(getCounterValue);

    return (
        <div className={styles.Counter}>
            <div className={styles.Counter__value}>{value}</div>
            <div className={styles.Counter__buttons}>
                <button
                    className={styles.Counter__button}
                    type="button"
                    onClick={() => dispatch(increaseCounter())}
                >
                    +
                </button>
                <button
                    className={styles.Counter__button}
                    type="button"
                    onClick={() => dispatch(decreaseCounter())}
                >
                    -
                </button>
            </div>
        </div>
    );
};

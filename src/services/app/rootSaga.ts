import { take } from 'redux-saga/effects';
import { INCREASE_COUNTER } from '../features/counter/constants';

export function* watchClickSaga() {
    yield take(INCREASE_COUNTER);
    yield console.log('test');
}

export default function* rootSaga() {
    yield watchClickSaga();
}

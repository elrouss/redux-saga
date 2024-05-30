import { RootState } from '@/services/app/store';

export const getCounterValue = (state: RootState) => state.counter.value;

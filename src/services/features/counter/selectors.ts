import type { TRootState } from '@/services/app/store';

export const getCounterValue = (state: TRootState) => state.counter.value;

import { ResultResponse } from '@/types/ResultResponse';
import { atom } from 'recoil';

export const resultState = atom({
  key: 'resultList', 
  default: [] as ResultResponse[],
});

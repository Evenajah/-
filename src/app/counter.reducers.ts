import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = "2";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + "sss"),
  on(decrement, (state) => state + "sdd"),
  on(reset, (state) => "sss")
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

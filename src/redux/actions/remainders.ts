import { ADD_REMAINDER } from '../contants';

export function addRemaindeAction() {
  return {
    type: ADD_REMAINDER,
    meta: 'request',
  }
}

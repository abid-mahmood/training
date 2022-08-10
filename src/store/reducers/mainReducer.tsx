import { ADD_REMAINDER } from '../../redux/contants';

export interface ReminderInitialState {
  task: string;
  time: string;
}

const initialState: ReminderInitialState[] = [{
  time: '',
  task: '',
}];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REMAINDER: {
      switch(action.meta) {
        case 'success': {
          const newState = {
            ...state,
            time: action.payload.time,
            task: action.payload.task,
          }
    
          return state.concat(newState);
        }

        case 'failrue':
      }
    };

    default:
      return state;
  }
}

const { sampleData } = require('../../app/api/sampleData');
const {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} = require('./eventConstants');

const INITIAL_STATE = {
  events: [],
};

export default function eventReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };

    case UPDATE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(evt => evt.id !== payload)],
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(evt => evt.id !== payload)],
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload,
      };

    default:
      return state;
  }
}

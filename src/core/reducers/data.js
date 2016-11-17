const initialState = {
  sections: [],
  results: [],
};

export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SECTIONS':
      return Object.assign({ sections: action.sections }, state);
    case 'UPDATE_RESULTS':
      return Object.assign({ results: action.results }, state);
    case 'RESET_RESULTS':
      return Object.assign({ results: [] }, state);
    default:
      return state;
  }
}

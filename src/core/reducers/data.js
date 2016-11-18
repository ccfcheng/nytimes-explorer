const initialState = {
  sections: [],
  results: [],
};

export default function DataReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SECTIONS':
      return Object.assign({}, state, { sections: action.sections });
    case 'UPDATE_RESULTS':
      return Object.assign({}, state, { results: action.results });
    case 'RESET_RESULTS':
      return Object.assign({}, state, { results: [] });
    default:
      return state;
  }
}

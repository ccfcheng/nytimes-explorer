import 'whatwg-fetch';

export const updateSections = sections => ({
  type: 'UPDATE_SECTIONS',
  sections,
});

export const updateResults = results => ({
  type: 'UPDATE_RESULTS',
  results,
});

export const resetResults = () => ({
  type: 'RESET_RESULTS',
});

export const loadSectionsIntoState = () => (dispatch) => {
  fetch('/sections')
    .then(res => res.json())
    .then(resData => dispatch(updateSections(resData.results)));
};

export const loadArticlesIntoState = () => (dispatch) => {
  fetch('/articles')
    .then(res => res.json())
    // .then(resData => console.log(resData));
    .then(resData => dispatch(updateResults(resData.response.docs)));
};

export const loadTimeswireIntoState = () => (dispatch) => {
  fetch('/timeswire')
    .then(res => res.json())
    // .then(resData => console.log(resData));
    .then(resData => dispatch(updateResults(resData.results)));
};

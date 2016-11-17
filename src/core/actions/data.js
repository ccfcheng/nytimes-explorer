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

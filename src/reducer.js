export const initialState = {
    articles: []
}

export const articleReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        [action.key]: action.data,
      };
    default:
      return state;
  }
};
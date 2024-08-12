import { TOGGLE_THEME } from './themeActions';

const initialState = {
  darkMode: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
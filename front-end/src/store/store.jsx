import { configureStore } from "@reduxjs/toolkit";

let state = {
  value: null,
  profil: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "ADD_PROFIL": {
      const userData = [...currentState.profil, action.payload];
      return { ...currentState, profil: userData };
    }
    case "REMOVE_PROFIL": {
      const profil = [];
      return { ...currentState, profil: profil };
    }
    case "UPDATE_PROFIL": {
      const owner = { ...currentState.owner, firstName: action.payload };
      return { ...currentState, owner };
    }
    default:
      return currentState;
  }
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});

import { configureStore } from "@reduxjs/toolkit";

let state = {
  value: null,
  profil: [],
  token: {},
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "ADD_PROFIL": {
      const userData = [...currentState.profil, action.payload];
      return {
        ...currentState,
        profil: userData[0].profil.body,
        token: userData[0].token.body.token,
      };
    }
    case "REMOVE_PROFIL": {
      return { ...currentState, profil: [] };
    }
    case "UPDATE_PROFIL": {
      return (
        { ...currentState, profil: [] },
        { ...currentState, profil: action.payload.body }
      );
    }
    default:
      return currentState;
  }
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});

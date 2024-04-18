import { combineReducers, configureStore } from '@reduxjs/toolkit';
import characters from './characters';
import singleCharacter from './single-character';

const rootReducer = combineReducers({
  characters,
  singleCharacter,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

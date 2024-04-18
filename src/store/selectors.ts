import { RootState } from './store';

export const getCharacters = (state: RootState) => state.characters;
export const getSingleCharacter = (state: RootState) => state.singleCharacter;

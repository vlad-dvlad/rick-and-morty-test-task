import { RootState } from './store';

export const getCharacters = (state: RootState) => state.characters;
export const getSingleCharacterInfo = (state: RootState) => state.singleCharacter;

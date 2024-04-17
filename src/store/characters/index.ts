import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../../entities/character.types';
import { fetchCharacters } from './actions';

interface CharactersState {
  data: ICharacter[];
  isLoading: boolean;
  error: string;
}

const initialState: CharactersState = {
  data: [],
  isLoading: false,
  error: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCharacters.fulfilled.type,
        (state, action: PayloadAction<ICharacter[]>) => {
          state.isLoading = false;
          state.error = '';
          state.data = action.payload;
        }
      )
      .addCase(
        fetchCharacters.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

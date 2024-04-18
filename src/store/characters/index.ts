import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter, ICharactersPayload } from '../../entities/character.types';
import { fetchCharacters } from './actions';

interface CharactersState {
  data: ICharacter[];
  pages: number;
  count: number;
  isLoading: boolean;
  error: string;
}

const initialState: CharactersState = {
  data: [],
  pages: 0,
  count: 0,
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
        state.pages = 0;
        state.count = 0;
      })
      .addCase(
        fetchCharacters.fulfilled.type,
        (state, action: PayloadAction<ICharactersPayload>) => {
          state.isLoading = false;
          state.error = '';
          state.data = action.payload.data;
          state.count = action.payload.count;
          state.pages = action.payload.pages;
        }
      )
      .addCase(
        fetchCharacters.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.count = 0;
          state.pages = 0;
          state.data = [];
        }
      );
  },
});

export default charactersSlice.reducer;

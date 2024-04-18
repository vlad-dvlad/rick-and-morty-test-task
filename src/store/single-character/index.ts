import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../entities/character.types';
import { getSingleCharacter } from './actions';
import { Nullable } from '../../shared/types';

interface SingleCharacterState {
  data: Nullable<ICharacter>;
  isLoading: boolean;
  error: string;
}

const initialState: SingleCharacterState = {
  data: null,
  isLoading: false,
  error: '',
};

const singleCharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    clearState: (state) => {
      state.data = null;
      state.error = '';
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleCharacter.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getSingleCharacter.fulfilled.type,
        (state, action: PayloadAction<ICharacter>) => {
          state.isLoading = false;
          state.error = '';
          state.data = action.payload;
        }
      )
      .addCase(
        getSingleCharacter.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
          state.data = {} as ICharacter;
        }
      );
  },
});

export const { clearState } = singleCharacterSlice.actions;

export default singleCharacterSlice.reducer;

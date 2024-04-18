import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../shared/api';
import { ICharacter } from '../../entities/character.types';

export const getSingleCharacter = createAsyncThunk(
  'character/get-single',
  async (id: number, thunkApi) => {
    try {
      const response = await apiClient.get<ICharacter>(`/character/${id}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        'Error! Failed to get single character data'
      );
    }
  }
);

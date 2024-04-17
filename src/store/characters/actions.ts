import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../shared/api';
import { ICharacter } from '../../entities/character.types';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await apiClient.get<ICharacter[]>('/character');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('Error! Failed to fetch characters');
    }
  }
);

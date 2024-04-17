import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../shared/api';
import { CharactersApiResponse } from '../../entities/character.types';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await apiClient.get<CharactersApiResponse>('/character');
      return {
        data: response.data.results,
        pages: response.data.info.pages,
        count: response.data.info.count,
      };
    } catch (e) {
      return thunkApi.rejectWithValue('Error! Failed to fetch characters');
    }
  }
);

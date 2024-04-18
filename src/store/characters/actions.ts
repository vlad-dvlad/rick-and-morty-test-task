import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../shared/api';
import { CharactersApiResponse } from '../../entities/character.types';

type IParams = {
  page?: number;
  name?: string;
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (params: IParams, thunkApi) => {
    try {
      const response = await apiClient.get<CharactersApiResponse>(
        '/character/',
        { params }
      );
      return {
        data: response.data.results,
        pages: response.data.info.pages,
        count: response.data.info.count,
      };
    } catch (e) {
      return thunkApi.rejectWithValue('Error! Failed to fetch characters. Try to chande search value');
    }
  }
);

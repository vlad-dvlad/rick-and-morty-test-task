import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../shared/api';
import { CharactersApiResponse } from '../../entities/character.types';

type IParams = {
  page: number;
  count: number;
}

export const fetchCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (params: IParams, thunkApi) => {
    try {
      const { page, count } = params;
      const response = await apiClient.get<CharactersApiResponse>(`/character/?page=${1}`);
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

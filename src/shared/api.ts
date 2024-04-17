import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export interface ApiResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

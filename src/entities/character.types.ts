export interface ICharacter {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type?: string; // optional
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string; // URL
  episode: string[]; // Array of URLs
  url: string; // URL
  created: string; // Date or timestamp
}

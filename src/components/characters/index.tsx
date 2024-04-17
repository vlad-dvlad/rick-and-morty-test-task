import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import CharactersTable from './characters-table';
import { fetchCharacters } from '../../store/characters/actions';
import { getCharacters } from '../../store/selectors';

const Characters = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(getCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div>
      <CharactersTable />
    </div>
  );
};

export default Characters;

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import CharactersTable from './characters-table';
import { fetchCharacters } from '../../store/characters/actions';
import { getCharacters } from '../../store/selectors';
import s from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);


const Characters = () => {
  const dispatch = useAppDispatch();
  const { data, count, pages } = useAppSelector(getCharacters);

  useEffect(() => {
    dispatch(fetchCharacters({ count: 10, page: 1 }));
  }, []);

  return (
    <div className={cx('content')}>
      { data && <CharactersTable list={data} /> }
    </div>
  );
};

export default Characters;

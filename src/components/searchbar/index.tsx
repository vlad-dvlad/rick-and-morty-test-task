import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { debounce } from '../../helpers/debounce';
import { useAppDispatch } from '../../shared/hooks';
import { fetchCharacters } from '../../store/characters/actions';
import { useDebounce } from '../../hooks/use-debounce';

const cx = classNames.bind(styles);

const Searchbar = () => {
  const dispatch = useAppDispatch();
  const [debouncedValue, value, setValue] = useDebounce('', 1000);
  
  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchCharacters({ page: 1, count: 100 }));
    }
  }, [debouncedValue]);
  
  return (
    <div className={cx('searchbar')}>
      <input
        placeholder="Type character name there"
        className={cx('searchbar__input')}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;

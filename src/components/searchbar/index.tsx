import { useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useAppDispatch } from '../../shared/hooks';
import { fetchCharacters } from '../../store/characters/actions';
import { useDebounce } from '../../hooks/use-debounce';

const cx = classNames.bind(styles);

const Searchbar = () => {
  const dispatch = useAppDispatch();
  const [debouncedValue, value, setValue] = useDebounce('', 1000);

  useEffect(() => {
    dispatch(fetchCharacters({ name: debouncedValue }));
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

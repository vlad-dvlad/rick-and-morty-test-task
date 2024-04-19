import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import CharactersTable from './characters-table';
import { getCharacters } from '../../store/selectors';
import s from './styles.module.scss';
import classNames from 'classnames/bind';
import Error from '../../shared/components/error';
import Pagination from '../pagination';
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../store/characters/actions';
import { useDebounce } from '../../hooks/use-debounce';
import Loader from '../../shared/components/loader';

const cx = classNames.bind(s);

const pageSize = 10;

const Characters = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading, count } = useAppSelector(getCharacters);
  const [debouncedValue, value, setValue] = useDebounce('', 1000);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [forceCloseHint, setForceCloseHint] = useState<boolean>(true);

  const page = Math.floor(((currentPage - 1) * 10) / 20 + 1);
  const firstPageIndex = currentPage % 2 ? 0 : 10;
  const lastPageIndex = currentPage % 2 ? 10 : 20;
  const closeHint = data.slice(0, 5).some((item) => item.name === debouncedValue);

  const handleChange = (searchValue: string) => {
    setCurrentPage(1);
    setValue(searchValue);
    setForceCloseHint(false)
  };

  const saveSearchData = (value: string, page: string) => {
    localStorage.setItem('searchTerm', value);
    localStorage.setItem('page', page);
  };

  useEffect(() => {
    try {
      const searchTerm = localStorage.getItem('searchTerm');
      const page = localStorage.getItem('page');
      if (searchTerm && page) {
        setValue(searchTerm);
        setCurrentPage(+page);
        localStorage.clear();
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (!debouncedValue) return;
    if (debouncedValue !== value) return;
    dispatch(fetchCharacters({ name: debouncedValue, page }));
    return () => {
      saveSearchData(debouncedValue, currentPage.toString());
    };
  }, [debouncedValue, value, page]);

  if (isLoading) return <Loader />;

  return (
    <div className={cx('content')}>
      <OutsideClickHandler onOutsideClick={() => setForceCloseHint(true)}>
        <div className={cx('searchbar')}>
          <input
            placeholder="Type character name there"
            className={cx('searchbar__input')}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className={cx('searchbar__results', { hide: closeHint || forceCloseHint || data.length === 1 || data.length === 0 })}>
            {
              data.slice(0, 5).map((item) => (
                <div key={item.id}  onClick={() => setValue(item.name)}>{item.name}</div>
              ))
            } 
          </div>
        </div>
      </OutsideClickHandler>

      {data.length !== 0 && !error && (
        <CharactersTable list={data.slice(firstPageIndex, lastPageIndex)} />
      )}
      <Pagination
        siblingCount={1}
        currentPage={currentPage}
        totalCount={count}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {error && <Error message={error} />}
    </div>
  );
};

export default Characters;

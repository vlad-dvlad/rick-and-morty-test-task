import { useAppSelector } from '../../shared/hooks';
import CharactersTable from './characters-table';
import { getCharacters } from '../../store/selectors';
import s from './styles.module.scss';
import classNames from 'classnames/bind';
import Searchbar from '../searchbar';
import Error from '../../shared/components/error';

const cx = classNames.bind(s);

const Characters = () => {
  const { data, error, isLoading } = useAppSelector(getCharacters);

  return (
    <div className={cx('content')}>
      <Searchbar />
      {data && !error && <CharactersTable list={data} />}
      {error && <Error message={error} />}
    </div>
  );
};

export default Characters;

import s from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

const CharactersTable = () => {
  return <div className={cx('table')}></div>;
};

export default CharactersTable;

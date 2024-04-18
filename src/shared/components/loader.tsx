import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Loader = () => {
  return <div className={cx('loader')} />;
};

export default Loader;

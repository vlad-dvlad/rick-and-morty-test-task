import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import error from '../../assets/icons/error.svg';

const cx = classNames.bind(styles);

interface IProps {
  message: string;
}

const Error: FC<IProps> = ({ message }) => {
  return (
    <div className={cx('error')}>
      <img src={error} alt="Errro" loading="lazy" />
      {message}
    </div>
  );
};

export default Error;

import { FC } from 'react';
import { ICharacter } from '../../../entities/character.types';
import s from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(s);

interface IProps {
  list: ICharacter[];
}

const CharactersTable: FC<IProps> = ({ list }) => {
  return (
    <div className={cx('table')}>
      <div className={cx('table__row')}>
        <div>Id</div>
        <div>Name</div>
        <div>Status</div>
        <div>Species</div>
        <div>Image</div>
      </div>
      {list.map((item) => (
        <Link
          to={`/chracter/${item.id}`}
          key={item.id}
          className={cx('table__row')}
        >
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.status}</div>
          <div>{item.species}</div>
          <div>
            <img src={item.image} alt="Image" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharactersTable;

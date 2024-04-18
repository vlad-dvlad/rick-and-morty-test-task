import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getSingleCharacter } from '../../store/single-character/actions';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { getSingleCharacterInfo } from '../../store/selectors';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { clearState } from '../../store/single-character';

const cx = classNames.bind(styles);

const SingleCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: characterInfo } = useAppSelector(getSingleCharacterInfo);

  const handleClick = () => {
    navigate('/');
    dispatch(clearState());
  };

  useEffect(() => {
    if (id) {
      dispatch(getSingleCharacter(+id));
    }
  }, [id]);
  return (
    <div className={cx('wrapper')}>
      <button onClick={handleClick}>Back to main page</button>
      <div className={cx('character__wrapper')}>
        {characterInfo && (
          <div className={cx('character__content')}>
            <div>
              <img src={characterInfo?.image} alt="Image main" />
            </div>
            <div className={cx('character__info')}>
              <span className={cx('character__name')}>
                <strong>{characterInfo?.name}</strong>
              </span>
              <span className={cx('character__text')}>
                <strong>Gender:</strong> {characterInfo?.gender}
              </span>
              <span className={cx('character__text')}>
                <strong>Location:</strong> {characterInfo?.location.name}
              </span>
              <span className={cx('character__text')}>
                <strong>Origin:</strong> {characterInfo?.origin.name}
              </span>
              <span className={cx('character__text')}>
                <strong>Species:</strong> {characterInfo?.species}
              </span>
              <span className={cx('character__text')}>
                <strong>Status:</strong> {characterInfo?.status}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCharacter;

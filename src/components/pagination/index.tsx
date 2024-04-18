import { FC } from 'react';
import { DOTS, usePagination } from '../../hooks/use-pagination';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (num: number) => void;
}
const Pagination: FC<IProps> = ({
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (!paginationRange) return <div></div>;
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={cx('pagination-container')}>
      <li
        className={cx('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={cx("arrow left")} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber + Math.random().toString()} className={cx('pagination-item', 'dots')}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={cx('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            key={pageNumber + Math.random().toString()}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={cx('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={cx("arrow right")} />
      </li>
    </ul>
  );
};

export default Pagination;

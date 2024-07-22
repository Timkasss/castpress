import styles from "./styles.module.scss";
import { IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  allPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  allPages,
  currentPage,
  setCurrentPage,
}) => {
  const visiblePages = 3;
  const getVisiblePageNumbers = () => {
    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = startPage + visiblePages - 1;

    if (endPage > allPages) {
      endPage = allPages;
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pagesNumbers = getVisiblePageNumbers();
  return (
    <nav className={styles.pagination}>
      <ol className={styles.pagination__list}>
        {pagesNumbers.map((page) => (
          <li
            key={page}
            className={`${styles.pagination__dot} ${
              page === currentPage ? styles.pagination__dot_current : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(page);
            }}
          >
            <a href="#">{page}</a>
          </li>
        ))}
        {pagesNumbers[pagesNumbers.length - 1] < allPages && (
          <>
            <li className={styles.pagination__dot}>
              <a href="#">...</a>
            </li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < allPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              <IoIosArrowForward />
            </a>
          </>
        )}
      </ol>
    </nav>
  );
};
export default Pagination;

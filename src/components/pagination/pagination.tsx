import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  onChangePage,
}: PaginationProps): JSX.Element => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event: { selected: number }) =>
        onChangePage(event.selected + 1)
      }
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

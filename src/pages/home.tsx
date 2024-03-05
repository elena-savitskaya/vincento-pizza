import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Categories,
  Sort,
  PizzaBlock,
  Skeleton,
  Pagination,
} from "../components";
import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { selectPizzaData } from "../redux/pizza/selectors";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { fetchPizzas } from "../redux/pizza/asyncActions";

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const onChangeCategory = useCallback(
    (idx: number) => {
      dispatch(setCategoryId(idx));
    },
    [dispatch]
  );

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";
    const search = searchValue;

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Усі піци</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Сталася помилка 😕</h2>
          <p>Повторіть спробу пізніше.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

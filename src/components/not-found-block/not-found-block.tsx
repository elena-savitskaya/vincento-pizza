import styles from "./not-found-block.module.scss";

export const NotFoundBlock = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>Cторінка відсутня</p>
    </div>
  );
};

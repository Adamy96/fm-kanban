import { FC } from "react";
import styles from "./styles.module.scss";

const Page: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <p className={styles.xl}>Page client xl</p>
      <p className={styles.lg}>Page client lg</p>
      <p className={styles.md}>Page client md</p>
      <p className={styles.sm}>Page client sm</p>
      <p className={styles.xs}>Page client xl</p>
    </div>
  );
};

export default Page;

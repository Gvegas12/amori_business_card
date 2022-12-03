import React from "react";
import Header from "../../sections/Header";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className="container">
            <p>
              The hour of departure has arrived, and we go our separate ways, I
              to die, and you to live. Which of these two is better only God
              knows.
            </p>
          </div>
          <div className={styles.img}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.img}></div>
            <h3>Heading 3</h3>
          </div>
          <div className={styles.bottom}>
            <div className={styles.img}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

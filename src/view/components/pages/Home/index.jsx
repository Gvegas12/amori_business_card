import React from "react";

import styles from "./index.module.scss";

const data = [
  {
    text: "Telegram",
    path: "",
  },
  {
    text: "Instagram",
    path: "",
  },
  {
    text: "Vk",
    path: "",
  },
  {
    text: "Еще что то",
    path: "",
  },
];

const Home = () => {
  return (
    <div className="container">
      <div className={styles.root}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <div className={styles.titleContainer}>
            <h1 className="h1-name">
              <span>Amori Salvatore</span>
            </h1>
          </div>
          <div className={styles.list}>
            <ul>
              {data.map(({ text, path }, i) => (
                <li key={i}>
                  <a className="hover-container" href={path}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

import styles from "./index.module.scss";

const data = [
  {
    text: "Telegram",
    path: "https://t.me/kitsumori",
  },
  {
    text: "Instagram",
    path: "https://instagram.com/piercingbyamori?igshid=ZDdlNDJhZDc=",
  },
  {
    text: "VK Личный аккаунт",
    path: "https://vk.com/kitsumorri",
  },
  {
    text: "VK Сообщество",
    path: "https://vk.com/amori_salvatore",
  },
];

const Home = () => {
  return (
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
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  HOME_ROUTE2,
} from "../../../../data/router/utils/utils__publicRoutes";

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

const Home2 = () => {
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    if (window.location.pathname === HOME_ROUTE2) {
      console.log(2);
    }
  }, []);

  return (
    <div className="container">
      <div ref={rootRef} className={styles.root}>
        <div className={styles.left}>
          <Link className="hover-container" to={HOME_ROUTE}>
            var 1
          </Link>
        </div>
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
        <div className={styles.right}>
          <Link className="hover-container" to={HOME_ROUTE2}>
            var 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home2;

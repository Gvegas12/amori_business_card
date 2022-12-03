import React from "react";
import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  HOME_ROUTE2,
} from "../../../../data/router/utils/utils__publicRoutes";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className="container text-center d-flex justify-between align-center">
        <Link className="hover-container" to={HOME_ROUTE}>
          var 1
        </Link>
        <h1 className="h1-name">
          <span>Amori Salvatore</span>
        </h1>
        <Link className="hover-container" to={HOME_ROUTE2}>
          var 2
        </Link>
      </div>
    </header>
  );
};

export default Header;
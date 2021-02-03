import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addalbum">Add your album</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

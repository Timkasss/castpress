"use client";
import { useState } from "react";

import { oswald } from "../../ui/fonts";
import styles from "./styles.module.scss";

import { FaRegHeart, FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [openBurger, setOpenBurger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`${oswald.className} ${styles.header__logo}`}>
        <Link href={"/"}>CastPress.</Link>
      </div>

      <nav className={styles.headerMenu}>
        <div
          className={`${styles.headerMenu__burgerWrapper} ${
            openBurger ? styles.headerMenu__burgerWrapper_open : ""
          }`}
        >
          <ul className={styles.headerMenu__list}>
            <li
              className={styles.headerMenu__item}
              onClick={() => setOpenMenu(!openMenu)}
            >
              Episodes
              <span
                className={`${styles.headerMenu__arrow} ${
                  openMenu ? styles.headerMenu__arrow_rotate_down : ""
                }`}
              ></span>
              <ul
                className={`${styles.headerMenu__nestedList} ${
                  openMenu ? styles.headerMenu__nestedList_open : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className={styles.headerMenu__nestedItem}>
                  <a href="#" className={styles.headerMenu__nestedLink}>
                    One
                  </a>
                </li>
                <li className={styles.headerMenu__nestedItem}>
                  <a href="#" className={styles.headerMenu__nestedLink}>
                    Two
                  </a>
                </li>
                <li className={styles.headerMenu__nestedItem}>
                  <a href="#" className={styles.headerMenu__nestedLink}>
                    Three
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.headerMenu__item}>
              <a className={styles.headerMenu__link} href="#">
                Blog
              </a>
            </li>
            <li className={styles.headerMenu__item}>
              <a className={styles.headerMenu__link} href="#">
                Contact
              </a>
            </li>
            <li className={styles.headerMenu__item}>
              <a className={styles.headerMenu__link} href="#">
                <FaRegHeart />
                Donate
              </a>
            </li>
          </ul>
          <div
            className={styles.headerMenu__burger}
            onClick={() => setOpenBurger(!openBurger)}
          >
            <span></span>
          </div>
        </div>
      </nav>

      <div className={styles.search}>
        <FaSearch />
      </div>
    </header>
  );
}

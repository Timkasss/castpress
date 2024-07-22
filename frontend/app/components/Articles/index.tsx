"use client";
import Article from "@/app/ui/Article";

import styles from "./articles.module.scss";
import Pagination from "@/app/ui/Pagination";
import { useState } from "react";

export default function Articles() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  let articles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const allPages: number = Math.ceil(articles.length / 3);

  const articleVisiblePage = 3;
  const articleLastPage = currentPage * articleVisiblePage;
  const articleFirstPage = articleLastPage - articleVisiblePage;
  const currrentArticles = articles.slice(articleFirstPage, articleLastPage);
  return (
    <div className={styles.articles}>
      {currrentArticles.map((article) => (
        <Article key={article} number={article} />
      ))}
      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

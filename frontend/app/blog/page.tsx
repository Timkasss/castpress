"use client";
import { useState } from "react";
import Post from "../ui/Post";
import styles from "./styles.module.scss";
import clock from "@/public/clock.jpg";
import headphones from "@/public/headphones.jpg";
import Pagination from "../ui/Pagination";

export default function Page() {
  const posts = [
    {
      title: "How to create your own podcast cover art?",
      date: "Feb 2, 2024",
      image: clock,
      alt: "clock",
    },
    {
      title: "Designing Unique Podcast Art: A Step-by-Step Guide",
      date: "Feb 3, 2024",
      image: headphones,
      alt: "headphones",
    },
    {
      title: "Creating Eye-Catching Podcast Covers: Tips and Tricks",
      date: "Feb 4, 2024",
      image: clock,
      alt: "clock",
    },
    {
      title: "Podcast Cover Design: Creative Approaches for Beginners",
      date: "Feb 5, 2024",
      image: headphones,
      alt: "headphones",
    },
    {
      title: "Crafting Podcast Cover Art: Essential Tips for New Podcasters",
      date: "Feb 6, 2024",
      image: clock,
      alt: "clock",
    },
    {
      title: "Podcast Cover Art: Design Tips for a Standout Look",
      date: "Feb 7, 2024",
      image: headphones,
      alt: "headphones",
    },
    {
      title: "Essential Guide to Designing Podcast Cover Art",
      date: "Feb 8, 2024",
      image: clock,
      alt: "clock",
    },
    {
      title: "Step-by-Step Podcast Cover Art Creation",
      date: "Feb 9, 2024",
      image: headphones,
      alt: "headphones",
    },
    {
      title: "Podcast Cover Art: Design Tips for a Standout Look",
      date: "Feb 7, 2024",
      image: headphones,
      alt: "headphones",
    },
    {
      title: "Essential Guide to Designing Podcast Cover Art",
      date: "Feb 8, 2024",
      image: clock,
      alt: "clock",
    },
    {
      title: "Step-by-Step Podcast Cover Art Creation",
      date: "Feb 9, 2024",
      image: headphones,
      alt: "headphones",
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const allPages: number = Math.ceil(posts.length / 3);

  const postVisiblePage = 3;
  const postLastPage = currentPage * postVisiblePage;
  const postFirstPage = postLastPage - postVisiblePage;
  const currrentPosts = posts.slice(postFirstPage, postLastPage);

  return (
    <section className={styles.blog}>
      {currrentPosts.map((post) => (
        <Post key={post.date} data={post} />
      ))}

      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

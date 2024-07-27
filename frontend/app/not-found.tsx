import Link from "next/link";
import "./globals.css";
import { IoIosArrowForward } from "react-icons/io";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="title">404</h2>
      <p className="subtitle">Page not found!</p>
      <p className="text">
        This page not found (deleted or never exists).
        <br />
        Try a phrase in search box or back to home and start again.
      </p>
      <Link href="/" className="link">
        HOMEPAGE
        <IoIosArrowForward />
      </Link>
    </div>
  );
}

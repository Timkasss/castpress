import Header from "./components/Header";
import Front from "./components/Front";
import Articles from "./components/Articles";
import Team from "./components/Team";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Front />
        <Articles />
        <Team />
        <Posts />
      </main>
      <Footer />
    </div>
  );
}

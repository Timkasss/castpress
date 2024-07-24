import Front from "./components/Front";
import Articles from "./components/Articles";
import Team from "./components/Team";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main>
      <h1>Welcome to CastPress</h1>
      <Front />
      <Articles />
      <Team />
      <Posts />
    </main>
  );
}

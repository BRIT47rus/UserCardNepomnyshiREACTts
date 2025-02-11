import Container from "./components/Container/Container";
import "./App.css";
import TheHeader from "./components/TheHeader/TheHeader";
import { Search } from "./components/Search/";
import { UserCard } from "./components/UserCard";
import { userMock } from "./mock";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "./components/type";
import { isGitHubUser } from "./components/utils/typeguards";
import { extractLocalUser } from "./components/utils/extract-local-user";
const BASE_URL = "https://api.github.com/users/";
function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(userMock);

  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;
    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;

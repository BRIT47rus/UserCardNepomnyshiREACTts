import { LocalGithubUser } from "../type";
import styles from "./UserTitile.module.scss";
interface UserTitileProps
  extends Pick<LocalGithubUser, "name" | "login" | "created"> {}
const localDate = new Intl.DateTimeFormat("en-Gb", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitile = ({ created, login, name }: UserTitileProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.title}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

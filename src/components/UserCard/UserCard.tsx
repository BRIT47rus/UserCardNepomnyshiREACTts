import { UserStat } from "../UserStat";
import style from "./UserCard.module.scss";

import { LocalGithubUser } from "../type";
import { UserTitile } from "../UserTitile";
import { UserInfo } from "../UserInfo";
interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={style.usercard}>
      <img src={props.avatar} alt={props.login} className={style.avatar} />
      <UserTitile
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${style.bio}${props.bio ? "" : ` ${style.empty}`}`}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        followers={props.followers}
        following={props.following}
        repos={props.repos}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};

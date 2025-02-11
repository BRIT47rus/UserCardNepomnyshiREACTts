import CompanyIcon from "../../assets/icon-company.svg?react";
import LocationIcon from "../../assets/icon-location.svg?react";
import TwiterIcon from "../../assets/icon-twitter.svg?react";
import BlogIcon from "../../assets/icon-website.svg?react";

import { InfoItem, InfoItemProps } from "../InfoItem/InfoItem";
import { LocalGithubUser } from "../type";
import style from "./UserInfo.module.scss";
interface UserInfoProps
  extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    { icon: <LocationIcon />, text: location },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwiterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];
  return <div className={style.userinfo}>{items.map((item,idx)=>(
    <InfoItem {...item} key={idx}/>
  ))}</div>;
};

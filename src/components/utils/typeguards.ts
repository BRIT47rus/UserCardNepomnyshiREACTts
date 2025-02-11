import { GithubUser } from "../type";

export const isGitHubUser = (user:any):user is GithubUser =>'id' in user;


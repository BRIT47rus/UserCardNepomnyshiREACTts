import { GithubUser, LocalGithubUser } from "../type";

export const extractLocalUser =(user:GithubUser):LocalGithubUser=>(
    {
        login:user.login,
        avatar:user.avatar_url,
        name:user.bio,
        bio:user.blog,
        company:user.company,
        created:user.created_at,
        followers:user.followers,
        following:user.following,
        location:user.location,
        repos:user.public_repos,
        twitter:user.twitter_username,
        blog:user.blog

    }
)
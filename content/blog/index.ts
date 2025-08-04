import { BlogPost } from "./shared/types";
import { applyingForGoogle } from "./posts/applyingForGoogle";
import { managingATechConference } from "./posts/managingATechConference";
import { myWorkAtGoogle } from "./posts/myWorkAtGoogle";
import { goodbyeGoogle } from "./posts/goodbyeGoogle";
import { firstBlogPost } from "./posts/firstBlogPost";
import { talesOfACeo } from "./posts/talesOfACeo";

const unsortedBlogPosts: BlogPost[] = [
  applyingForGoogle,
  managingATechConference,
  myWorkAtGoogle,
  goodbyeGoogle,
  firstBlogPost,
  talesOfACeo,
];

export const blogPosts: BlogPost[] = [...unsortedBlogPosts].sort((a, b) => {
  // Try to parse the date as Date objects and sort descending (newest first)
  const dateA = Date.parse(a.date);
  const dateB = Date.parse(b.date);
  return dateB - dateA;
});

export const blogPostsMap = new Map(blogPosts.map((post) => [post.slug, post]));
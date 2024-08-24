"use client";

import Link from 'next/link';
import { usePosts } from '../context/PostContext';

const PostList = () => {
  const { posts } = usePosts();

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link href={`/posts/${post.id}`}>Read More</Link>
          </div>
        ))
      ) : (
        <p>No posts yet!</p>
      )}
    </div>
  );
};

export default PostList;

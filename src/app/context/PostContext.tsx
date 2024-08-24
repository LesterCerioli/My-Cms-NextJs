"use client";

import { createContext, useState, ReactNode, useContext } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostContextProps {
  posts: Post[];
  addPost: (post: Post) => void;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};

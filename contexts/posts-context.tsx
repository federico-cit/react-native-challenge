import React, { createContext, ReactNode, useContext } from "react";

export type Post = {
  //IMPLEMENT
};

type PostsContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  toggleFavorite: (id: string) => void;
};

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  // TODO: implement state management here

  return (
    <PostsContext.Provider
      value={} //IMPLEMENT
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

"use client";
import React, { useEffect } from "react";
import DeletePostButton from "./DeletePostButton";

export interface PostProps {
  id: string; // Ensure this is not `any` for better type safety
  title: string;
  content: string;
  authorName: string;
  published: boolean;
}

const Post: React.FC<PostProps> = ({
  id,
  title,
  content,
  authorName,
  published,
}) => {
  useEffect(() => {
    console.log("Post component received id:", id);
  }, [id]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h1 className="text-2xl font-bold mb-2">{authorName}</h1>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p>{published ? "Published" : "Unpublished"}</p>
      <DeletePostButton postId={id} />
    </div>
  );
};

export default Post;

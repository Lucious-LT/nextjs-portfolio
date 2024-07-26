"use client";
// import Error from "next/error";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface DeletePostButtonProps {
  postId: string;
}

const DeletePostButton: FC<DeletePostButtonProps> = ({ postId }) => {
  const router = useRouter();

  const handleClick = async  (_e:any) => {
    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error deleting post:", errorData);
        return;
      }

      console.log("Post deleted successfully");
      router.push("/"); // Uncomment this to navigate after deletion
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeletePostButton;

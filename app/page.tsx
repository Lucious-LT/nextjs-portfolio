import prisma from "@/lib/prisma";
import Post from "@/app/components/Post";
import Link from "next/link";

 function getPosts() {
  const posts =  prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log({ posts });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/add-post" className="text-blue-500">
        Add Post
      </Link>
      <h1 className="text-4xl font-bold mb-8">Feed</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author?.name ?? "Unknown"}
          content={post.content}
          published={post.published}
        />
      ))}
    </main>
  );
}

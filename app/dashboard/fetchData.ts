export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function getComments(): Promise<Comment[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  const data: Comment[] = await res.json();

  return data;
}

"use server";

import { Blog } from "@/type";

export const CreateBlog = async (data: Blog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const blogInfo = await res.json();

  return blogInfo;
};

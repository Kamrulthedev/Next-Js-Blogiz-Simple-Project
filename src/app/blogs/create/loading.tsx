import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/type";
import React from "react";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return (
    <div className="grid grid-cols-3 gap-5">
      {blogs?.map((blog: Blog) => (
        <LoadingCard key={blog.id}></LoadingCard>
      ))}
    </div>
  );
};

export default BlogLoadingPage;

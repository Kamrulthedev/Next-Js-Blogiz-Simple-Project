import { Blog } from "@/type";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-serif text-center m-5">
          This is Latest <span className="text-green-500">Blogiz</span>
        </h1>
        <p className="text-center font-serif w-2/4 mx-auto text-slate-600">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
        <div className="grid grid-cols-2 gap-5 w-[90%] mx-auto my-4">
          {blogs.slice(0, 2).map((blog) => (
            <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto my-5">
          {blogs.slice(2, 5).map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;

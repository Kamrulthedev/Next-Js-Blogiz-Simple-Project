"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import React from "react";

const AllBlogs = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl font-serif text-center m-5">
        This is All <span className="text-green-500">Blogiz</span>
      </h1>
      <p className="text-center font-serif w-2/4 mx-auto text-slate-600">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;

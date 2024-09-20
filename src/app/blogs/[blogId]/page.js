import BlogDetails from "@/components/ui/BlogDetails";

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div>
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
};

export default BlogDetailsPage;

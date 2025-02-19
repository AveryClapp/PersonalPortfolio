import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPost from "@/Components/BlogList/BlogPost";

async function getPost(slug) {
  const filePath = path.join(process.cwd(), "src/Blogs", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { 
    ...data,
    content,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <BlogPost post={post} />;
}

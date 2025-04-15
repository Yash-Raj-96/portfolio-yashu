// @flow strict

import { personalData } from "@/utils/data/personal-data";

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
};

async function Page() {
  const blogs = await getBlogs();

  return (
    <div>
      <h2>Recent Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.title}
            </a>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

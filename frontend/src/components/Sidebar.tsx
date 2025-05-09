import { Link } from 'react-router-dom';
import { useMemo } from 'react';

import type { Post } from './BlogPost';

type SidebarProps = {
  posts: Post[];
};

function Sidebar({ posts }: SidebarProps) {
  const categories = useMemo(() => {
    const categoryCounts = posts.reduce(
      (acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags);
    const tagCounts = allTags.reduce(
      (acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const recentPosts = useMemo(() => {
    return [...posts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [posts]);

  return (
    <aside className="space-y-12 text-left">
      <div>
        <h3 className="text-gray-700 mb-4 text-lg font-normal">Recent Posts</h3>
        <ul className="list-none space-y-2">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/post/${post.id}`}
                className="hover:text-gray-900 text-gray-600"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-gray-700 mb-4 text-lg font-normal">Categories</h3>
        <ul className="list-none">
          {categories.map(([category, count]) => (
            <li key={category} className="mb-1">
              <Link
                to={`/category/${category.toLowerCase()}`}
                className="hover:text-gray-900 text-gray-600"
              >
                {category}
              </Link>
              <span className="text-gray-400 ml-1 text-sm">({count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-gray-700 mb-4 text-lg font-normal">Tags</h3>
        <div className="flex flex-wrap gap-3">
          {tags.map(([tag]) => (
            <Link
              key={tag}
              to={`/tag/${tag.toLowerCase()}`}
              className="bg-white hover:bg-gray-50 text-gray-600 border-gray-200 inline-block border px-3 py-1 text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

export { Sidebar };
export default Sidebar;

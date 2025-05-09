import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import posts from '../data/posts';
import { useMemo } from 'react';

export default function ArchivesPage() {
  const archivesByYear = useMemo(() => {
    const archives: Record<string, typeof posts> = {};

    posts.forEach((post) => {
      const year = new Date(post.date).getFullYear().toString();
      if (!archives[year]) {
        archives[year] = [];
      }
      archives[year].push(post);
    });

    // Sort posts within each year by date (newest first)
    Object.keys(archives).forEach((year) => {
      archives[year].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    });

    // Return years sorted in descending order
    return Object.entries(archives).sort(
      ([yearA], [yearB]) => Number(yearB) - Number(yearA),
    );
  }, []);

  return (
    <Layout
      posts={posts}
      title="Archives"
      subtitle="Browse through all posts"
      backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028"
    >
      {archivesByYear.map(([year, yearPosts]) => (
        <div key={year} className="mb-14">
          <h2 className="text-gray-800 mb-8 text-center text-3xl font-normal">
            {year}
          </h2>
          <div className="space-y-6">
            {yearPosts.map((post) => {
              // 格式化日期为月日格式
              const date = new Date(post.date);
              const formattedDate = date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
              });

              return (
                <div key={post.id} className="text-center">
                  <h3 className="mb-1 text-xl font-normal">
                    <Link
                      to={`/post/${post.id}`}
                      className="text-gray-700 hover:text-gray-900"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="text-gray-500 text-sm">{formattedDate}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
}

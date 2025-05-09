import type { FC } from 'react';

import { useMemo } from 'react';
// import { Link } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { posts } from '../data/posts';

import type { Post } from '../components/BlogPost';

const ArchivesPage: FC = () => {
  const archivesByYear = useMemo(() => {
    const archives: Record<string, Post[]> = {};

    posts.forEach((post) => {
      const date = new Date(post.date);
      const year = date.getFullYear().toString();

      if (!archives[year]) {
        archives[year] = [];
      }

      archives[year].push(post);
    });

    // 按年份降序排列
    Object.keys(archives).forEach((year) => {
      archives[year].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    });

    return archives;
  }, []);

  return (
    <Layout
      posts={posts}
      title="Archives"
      subtitle="All posts by year"
      backgroundImage="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2027"
    >
      {/* 按年份降序排列 */}
      {Object.keys(archivesByYear)
        .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
        .map((year) => (
          <div key={year} className="mb-10">
            <h2 className="mb-4 text-2xl font-normal">{year}</h2>
            {archivesByYear[year].map((post) => (
              <div key={post.id} className="mb-4">
                <span className="inline-block w-24 text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <a
                  href={`/post/${post.id}`}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {post.title}
                </a>
              </div>
            ))}
          </div>
        ))}
    </Layout>
  );
};

export { ArchivesPage };
export default ArchivesPage;

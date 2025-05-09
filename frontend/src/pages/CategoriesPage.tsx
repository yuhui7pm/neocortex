import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { posts } from '../data/posts';

export function CategoriesPage() {
  const categories = useMemo(() => {
    const categoryCounts = posts.reduce<Record<string, number>>((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(categoryCounts).sort((a, b) =>
      a[0].localeCompare(b[0]),
    );
  }, []);

  return (
    <Layout
      posts={posts}
      title="Categories"
      subtitle="Explore topics"
      backgroundImage="https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=2032"
    >
      <div>
        <div className="mb-12 text-center">
          {categories.map(([category, count]) => (
            <div key={category} className="mb-8 border-b border-gray-200 pb-6">
              <h2 className="mb-1 text-2xl font-normal">
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {category}
                </Link>
              </h2>
              <div className="text-sm text-gray-500">
                {count} {count === 1 ? 'post' : 'posts'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CategoriesPage;

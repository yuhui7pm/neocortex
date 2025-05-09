import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import posts from '../data/posts';
import { useMemo } from 'react';

export default function TagsPage() {
  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags);
    const tagCounts = allTags.reduce(
      (acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(tagCounts).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  return (
    <Layout
      posts={posts}
      title="Tags"
      subtitle="Browse content by topic"
      backgroundImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973"
    >
      <div className="mb-12 text-center">
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {tags.map(([tag, count]) => (
            <div key={tag} className="mb-8">
              <h2 className="mb-1 text-xl font-normal">
                <Link
                  to={`/tag/${tag.toLowerCase()}`}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {tag}
                </Link>
              </h2>
              <div className="text-gray-500 text-sm">
                {count} {count === 1 ? 'post' : 'posts'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

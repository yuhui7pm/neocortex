import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import { posts } from '../data/posts';

function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const categoryPosts = useMemo(() => {
    if (!categorySlug) {
      return [];
    }

    return posts.filter(
      (post) => post.category.toLowerCase() === categorySlug.toLowerCase(),
    );
  }, [categorySlug]);

  if (!categorySlug || categoryPosts.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <Layout
      posts={posts}
      title={categoryPosts[0]?.category}
      subtitle={`${categoryPosts.length} ${categoryPosts.length === 1 ? 'post' : 'posts'}`}
      backgroundImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2030"
    >
      <div>
        {categoryPosts.map((post) => (
          <BlogPost key={post.id} post={post} isListItem={true} />
        ))}
      </div>
    </Layout>
  );
}

export { CategoryPage };
export default CategoryPage;

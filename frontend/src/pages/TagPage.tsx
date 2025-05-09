import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { BlogPost } from '../components/BlogPost';
import { Layout } from '../components/Layout';
import { posts } from '../data/posts';

function TagPage() {
  const { tagSlug } = useParams<{ tagSlug: string }>();

  const tagPosts = useMemo(() => {
    if (!tagSlug) {
      return [];
    }

    return posts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase() === tagSlug.toLowerCase()),
    );
  }, [tagSlug]);

  if (!tagSlug || tagPosts.length === 0) {
    return <Navigate to="/" />;
  }

  // 确保类型安全
  const formattedTag = tagSlug
    ? tagSlug[0].toUpperCase() + tagSlug.slice(1)
    : '';

  return (
    <Layout
      posts={posts}
      title={`Tag: ${formattedTag}`}
      subtitle={`${tagPosts.length} ${tagPosts.length === 1 ? 'post' : 'posts'}`}
      backgroundImage="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2017"
    >
      <div>
        {tagPosts.map((post) => (
          <BlogPost key={post.id} post={post} isListItem={true} />
        ))}
      </div>
    </Layout>
  );
}

export { TagPage };
export default TagPage;

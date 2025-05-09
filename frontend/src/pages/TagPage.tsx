import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';
import posts from '../data/posts';
import { useMemo } from 'react';

export default function TagPage() {
  const { tagSlug } = useParams<{ tagSlug: string }>();

  const tagPosts = useMemo(() => {
    if (!tagSlug) return [];

    return posts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase() === tagSlug.toLowerCase()),
    );
  }, [tagSlug]);

  if (!tagSlug || tagPosts.length === 0) {
    return <Navigate to="/" />;
  }

  // 获取标签的正确大小写形式
  const tagName =
    tagPosts[0].tags.find(
      (tag) => tag.toLowerCase() === tagSlug.toLowerCase(),
    ) || tagSlug;

  return (
    <Layout
      posts={posts}
      title={`Tag: ${tagName}`}
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

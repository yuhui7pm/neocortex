import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';
import posts from '../data/posts';
import { useMemo } from 'react';

export default function PostPage() {
  const { id } = useParams<{ id: string }>();

  const post = useMemo(() => {
    return posts.find((p) => p.id === id);
  }, [id]);

  if (!post) {
    return <Navigate to="/" />;
  }

  // 使用适合文章内容的背景图
  // 在实际项目中可在文章数据中添加特定的headerImage
  const defaultImage =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072';

  // 格式化日期
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Layout
      posts={posts}
      title={post.title}
      subtitle={`Posted on ${formattedDate}`}
      backgroundImage={defaultImage}
      isPostPage={true}
    >
      <BlogPost post={post} isExcerpt={false} />
    </Layout>
  );
}

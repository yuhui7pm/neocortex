import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';
import posts from '../data/posts';

export default function HomePage() {
  // 按日期排序文章（最新的在前面）
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <Layout
      posts={posts}
      title="Clean Blog"
      subtitle="A modern stylish blog"
      backgroundImage="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070"
    >
      {sortedPosts.map((post) => (
        <BlogPost key={post.id} post={post} isHomePage={true} />
      ))}

      <div className="my-12 text-center">
        <a
          href="#"
          className="border-gray-300 hover:bg-gray-100 text-gray-600 inline-block rounded border px-5 py-2"
        >
          Older Posts →
        </a>
      </div>
    </Layout>
  );
}

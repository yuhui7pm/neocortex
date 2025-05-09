import { Link } from 'react-router-dom';

export type Post = {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  tags: string[];
};

type BlogPostProps = {
  post: Post;
  isExcerpt?: boolean;
  isHomePage?: boolean;
  isListItem?: boolean;
};

// 格式化日期为月份 日期 年份
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function BlogPost({
  post,
  isExcerpt = true,
  isHomePage = false,
  isListItem = false,
}: BlogPostProps) {
  const { id, title, date, content } = post;
  const formattedDate = formatDate(date);

  // 解析内容
  const paragraphs = content.split('\n\n').filter((p) => p.trim() !== '');
  const firstParagraph = paragraphs.find((p) => !p.startsWith('#')) || '';
  const excerpt =
    firstParagraph.slice(0, 150) + (firstParagraph.length > 150 ? '...' : '');

  if (isHomePage) {
    // 只显示文章标题和日期，用于主页列表
    return (
      <article className="mb-10 text-center">
        <h2 className="text-3xl font-normal">
          <Link
            to={`/post/${id}`}
            className="hover:text-gray-600 text-gray-800 no-underline"
          >
            {title}
          </Link>
        </h2>
        <div className="text-gray-500 mb-2 mt-1">{formattedDate}</div>
        <hr className="border-gray-200 mx-auto my-8 w-full border-t" />
      </article>
    );
  }

  if (isListItem) {
    // 用于分类和标签页面的列表项
    return (
      <article className="mb-10 text-center">
        <h2 className="mb-1 text-2xl font-normal">
          <Link
            to={`/post/${id}`}
            className="hover:text-gray-600 text-gray-800 no-underline"
          >
            {title}
          </Link>
        </h2>
        <div className="text-gray-500 text-sm">{formattedDate}</div>
      </article>
    );
  }

  // 主内容，用于文章详情页
  return (
    <article className="mb-16">
      {isExcerpt ? (
        <div className="text-center">
          <p className="text-gray-700 mb-4">{excerpt}</p>
          <Link
            to={`/post/${id}`}
            className="hover:bg-gray-100 text-gray-600 border-gray-300 inline-block rounded border px-4 py-2"
          >
            Read More
          </Link>
        </div>
      ) : (
        <div className="prose prose-lg text-gray-700 mx-auto">
          <div
            dangerouslySetInnerHTML={{
              __html: content
                .replace(/^# (.*$)/gm, '') // 移除第一个H1标题
                .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '<br><br>'),
            }}
          />
        </div>
      )}
    </article>
  );
}

export { BlogPost };
export default BlogPost;

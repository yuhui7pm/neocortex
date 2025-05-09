import type { FC } from 'react';

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

// Constants for reusable CSS classes
const LINK_CLASSES = 'hover:text-gray-600 text-gray-800 no-underline';

// 格式化日期为月份 日期 年份
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const BlogPost: FC<BlogPostProps> = ({
  post,
  isExcerpt = true,
  isHomePage = false,
  isListItem = false,
}) => {
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
          <Link to={`/post/${id}`} className={LINK_CLASSES}>
            {title}
          </Link>
        </h2>
        <div className="mb-2 mt-1 text-gray-500">{formattedDate}</div>
        <hr className="mx-auto my-8 w-full border-t border-gray-200" />
      </article>
    );
  }

  if (isListItem) {
    // 用于分类和标签页面的列表项
    return (
      <article className="mb-10 text-center">
        <h2 className="mb-1 text-2xl font-normal">
          <Link to={`/post/${id}`} className={LINK_CLASSES}>
            {title}
          </Link>
        </h2>
        <div className="text-sm text-gray-500">{formattedDate}</div>
      </article>
    );
  }

  // 主内容，用于文章详情页
  return (
    <article className="mb-16">
      {isExcerpt ? (
        <div className="text-center">
          <p className="mb-4 text-gray-700">{excerpt}</p>
          <Link
            to={`/post/${id}`}
            className="inline-block border border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Read More
          </Link>
        </div>
      ) : (
        <div className="prose-lg mx-auto text-gray-700 prose">
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
};

export { BlogPost };

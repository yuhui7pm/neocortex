import type { FC } from 'react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  isPostPage?: boolean;
};

// Constants to avoid string duplication
const TEXT_WHITE = 'text-white';
const TEXT_GRAY_800 = 'text-gray-800';
const TRANSITION_OPACITY = 'transition-opacity hover:opacity-70';
const DEFAULT_BG_IMAGE =
  'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1920';
const DEFAULT_TITLE = 'Clean Blog';
const DEFAULT_SUBTITLE = 'A modern stylish blog';

const Header: FC<HeaderProps> = ({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  backgroundImage = DEFAULT_BG_IMAGE,
  isPostPage = false,
}) => {
  const [scrolled, setScrolled] = useState(false);

  // 检测滚动位置更新导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // 确定顶部标题文字，保持一致性
  const headerTitle = 'Configurable Title';

  return (
    <header className={`relative ${!isPostPage ? 'mb-10' : ''}`}>
      {/* 大型背景图 */}
      <div
        className="absolute inset-0 h-[70vh] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      {/* 背景遮罩 */}
      <div className="absolute inset-0 h-[70vh] bg-black opacity-50"></div>

      {/* 导航栏 */}
      <div
        className={`fixed top-0 z-10 w-full transition-all duration-300 ${
          scrolled ? 'bg-white py-2 shadow' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link
            to="/"
            className={`text-xl font-normal transition-opacity hover:opacity-80 ${
              scrolled ? TEXT_GRAY_800 : TEXT_WHITE
            }`}
          >
            {headerTitle}
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className={`${
                    scrolled ? TEXT_GRAY_800 : TEXT_WHITE
                  } ${TRANSITION_OPACITY}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/archives"
                  className={`${
                    scrolled ? TEXT_GRAY_800 : TEXT_WHITE
                  } ${TRANSITION_OPACITY}`}
                >
                  Archives
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className={`${
                    scrolled ? TEXT_GRAY_800 : TEXT_WHITE
                  } ${TRANSITION_OPACITY}`}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/tag"
                  className={`${
                    scrolled ? TEXT_GRAY_800 : TEXT_WHITE
                  } ${TRANSITION_OPACITY}`}
                >
                  Tags
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* 标题区域 */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <div className="z-10 px-4 text-center text-white">
          <h1 className="text-5xl font-normal sm:text-6xl">{title}</h1>
          <hr className="mx-auto my-6 w-16 border-t-2 border-white" />
          <p className="text-xl font-light">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export { Header };

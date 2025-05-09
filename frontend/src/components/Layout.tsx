import type { FC, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

import type { Post } from './BlogPost';

type LayoutProps = {
  children: ReactNode;
  posts?: Post[];
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  isPostPage?: boolean;
};

const Layout: FC<LayoutProps> = ({
  children,
  title,
  subtitle,
  backgroundImage,
  isPostPage,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        isPostPage={isPostPage}
      />

      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { Layout };

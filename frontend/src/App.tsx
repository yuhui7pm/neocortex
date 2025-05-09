import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import { ArchivesPage } from './pages/ArchivesPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import { PostPage } from './pages/PostPage';
import { TagPage } from './pages/TagPage';
import { TagsPage } from './pages/TagsPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/archives" element={<ArchivesPage />} />
      <Route path="/category" element={<CategoriesPage />} />
      <Route path="/category/:categorySlug" element={<CategoryPage />} />
      <Route path="/tag" element={<TagsPage />} />
      <Route path="/tag/:tagSlug" element={<TagPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;

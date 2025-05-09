import type { Post } from '../components/BlogPost';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    date: '2023-08-15',
    category: 'React',
    tags: ['JavaScript', 'Frontend', 'React'],
    content: `
# Getting Started with React

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

## Why React?

React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template.

## Features of React

- **JSX:** JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.
- **Components:** React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.
- **One-way Data Binding:** React implements one-way data binding, which means there's a single source of truth in your applications.
- **Virtual DOM:** React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.

## Getting Started

Here's a simple example of a React component:

\`\`\`jsx
import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default HelloWorld;
\`\`\`

This is just the beginning of what you can do with React. The library has a vast ecosystem and can be used to build all kinds of user interfaces.
    `,
  },
  {
    id: '2',
    title: 'Understanding TypeScript with React',
    date: '2023-09-02',
    category: 'TypeScript',
    tags: ['TypeScript', 'React', 'Frontend'],
    content: `
# Understanding TypeScript with React

TypeScript is a statically typed superset of JavaScript that adds optional types to the language. When used with React, it provides type checking during development, which can help catch errors early.

## Benefits of Using TypeScript with React

- **Type Safety:** TypeScript helps identify errors during development.
- **Better IDE Support:** Get better autocompletion, navigation, and refactoring tools.
- **Enhanced Documentation:** Types can serve as documentation for your code.
- **Safer Refactoring:** When you change your code, TypeScript's type checker helps ensure you don't break existing functionality.

## Setting Up TypeScript with React

You can create a new React project with TypeScript using Create React App:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

Or if you're using Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Basic TypeScript Concepts for React

### Type Annotations

\`\`\`tsx
// For variables
const name: string = 'John';
const age: number = 30;
const isActive: boolean = true;

// For arrays
const names: string[] = ['John', 'Jane', 'Joe'];

// For objects
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30
};
\`\`\`

### React Component Props

\`\`\`tsx
interface GreetingProps {
  name: string;
  age?: number; // Optional prop
}

function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
}

// Usage
<Greeting name="John" age={30} />
\`\`\`

TypeScript makes React development more robust and maintainable, especially for larger projects.
    `,
  },
  {
    id: '3',
    title: 'Introduction to Vite',
    date: '2023-10-10',
    category: 'Tools',
    tags: ['Vite', 'Frontend', 'Tooling'],
    content: `
# Introduction to Vite

Vite (French word for "quick", pronounced /vit/) is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides rich feature enhancements over native ES modules
- A build command that bundles your code with Rollup, pre-configured to output optimized static assets for production

## Why Vite?

Vite improves the dev server start time by first dividing the modules in an application into two categories: dependencies and source code.

- **Dependencies:** Plain JavaScript that doesn't change often during development. Vite pre-bundles dependencies using esbuild, which is 10-100x faster than JavaScript-based bundlers.
- **Source Code:** Non-plain JavaScript that needs transforming (e.g., JSX, CSS, Vue components) and often changes during development. Source code is served over native ESM, which allows the browser to take over part of the job of a bundler.

## Getting Started with Vite

You can create a new project with Vite using npm:

\`\`\`bash
npm create vite@latest my-project -- --template react-ts
cd my-project
npm install
npm run dev
\`\`\`

## Key Features

- **Lightning Fast HMR:** Hot Module Replacement (HMR) that stays fast regardless of application size.
- **Out-of-the-box Support:** Support for TypeScript, JSX, CSS, and more.
- **Optimized Build:** Rollup-based build with multi-page and library mode support.
- **Universal Plugins:** Plugin interface shared between dev and build.
- **API for JavaScript:** A programmatic JavaScript API with full typing.

Vite represents the next generation of frontend build tools and is worth considering for your next project.
    `,
  },
];

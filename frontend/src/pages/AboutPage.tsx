import { Layout } from '../components/Layout';
import { posts } from '../data/posts';

export default function AboutPage() {
  return (
    <Layout
      posts={posts}
      title="About Me"
      subtitle="This is what I do"
      backgroundImage="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?q=80&w=2070"
    >
      <div className="max-w-none prose">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
          sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
          consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          praesentium recusandae illo eaque architecto error, repellendus iusto
          reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in
          officia voluptas voluptatibus, minus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
          quae optio aperiam soluta voluptatibus corporis atque iste neque sit
          tempora!
        </p>
      </div>
    </Layout>
  );
}

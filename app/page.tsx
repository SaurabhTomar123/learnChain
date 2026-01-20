import PostForm from "@/components/PostForm";
import Analytics from "@/components/Analytics";
import PostList from "@/components/PostList";
export default function Home() {
  return (
   <main className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">LearnChain Dashboard</h1>
      
      <section>
        <h2 className="text-xl mb-4">Platform Analytics</h2>
        <Analytics />
      </section>

      <section>
        <div>
          <h2 className="text-xl mb-4">Create New Content</h2>
          <PostForm />
        </div>
        <div>
          <h2 className="text-xl mb-4">Live Feed</h2>
          {/* We will create PostList next */}
          <PostList />
        </div>
      </section>
    </main>
  );
}
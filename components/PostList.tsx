"use client";
import { usePostContext} from '@/context/PostContext';

export default function PostList() {
  const { posts } = usePostContext();

  if (posts.length === 0) {
    return (
      <div className="text-center p-10 border-2 border-dashed rounded-xl text-gray-400">
        No posts yet. Use the dashboard to create your first Web3 post!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.id} className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-start mb-2">
            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${getSectionColor(post.section)}`}>
              {post.section}
            </span>
            <span className="text-gray-400 text-xs">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
          
          <div className="flex flex-wrap gap-2">
            {post.hashtags.map((tag, index) => (
              <span key={index} className="text-blue-500 text-sm font-medium">
                #{tag.replace('#', '')}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

// Helper function to color-code sections
function getSectionColor(section: string) {
  switch (section) {
    case 'News': return 'bg-blue-100 text-blue-700';
    case 'Jobs': return 'bg-green-100 text-green-700';
    case 'Courses': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}
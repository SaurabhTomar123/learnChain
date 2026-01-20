import { PostProvider } from '@/context/PostContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PostProvider>
          {children}
        </PostProvider>
      </body>
    </html>
  );
}
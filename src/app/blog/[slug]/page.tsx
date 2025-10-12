import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User } from 'lucide-react';

import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function getBlogImage(id: string) {
  return PlaceHolderImages.find(img => img.id === id);
}

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = getBlogImage(post.image_id);

  return (
    <article>
      <header className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4 max-w-4xl mx-auto">{post.title}</h1>
          <div className="flex items-center justify-center gap-6 text-md text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </header>

      {postImage && (
        <div className="container mx-auto -mt-10 mb-12">
            <div className="relative aspect-w-16 aspect-h-9 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <Image
                src={postImage.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={postImage.imageHint}
            />
            </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-8">
        <div
          className="prose prose-lg dark:prose-invert max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}

'use client';

import { blog2Img, blogImg, entertainmentImg } from '@/assets/images';
import Image from 'next/image';

const blogs = [
  {
    title: 'Social Life',
    description:
      'Document and share your DIY projects, including tutorials and creative ideas. Post about your photography projects, techniques, and favorite subjects.',
    image: blogImg,
    alt: 'Creative Projects',
  },
  {
    title: 'Food and Cooking',
    description:
      'Share your favorite recipes, cooking tips, and culinary experiments. Write about your experiences at local restaurants or cafes, including what you loved or didn’t.',
    image: blog2Img,
    alt: 'Food and Cooking',
  },
  {
    title: 'Entertainment and Media',
    description:
      'Review the latest movies or TV shows and discuss your favorites from different genres. Share your favorite music playlists and explain why you love the songs.',
    image: entertainmentImg,
    alt: 'Entertainment and Media',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-10">
      <div className="container mx-auto px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">BLOG</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast
            beginning signs open god you&apos;re gathering ithe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={blog.image}
                alt={blog.alt}
                width={400}
                height={250}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h5 className="text-xl font-semibold text-blue-500 mb-2">{blog.title}</h5>
                <p className="text-gray-600">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

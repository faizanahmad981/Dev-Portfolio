'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ModalProps {
  project: {
    title: string;
    description: string;
    technologies: string;
    images: string[];
    link?: string;
    dashboard?:string;
  };
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    setAutoPlay(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl">
          &times;
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4">{project.title}</h3>

        {/* Image Carousel */}
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={autoPlay}
          interval={3000}
          infiniteLoop
          showStatus={false}
          className="rounded-lg overflow-hidden"
        >
          {project.images.map((img, index) => (
            <div key={index} className="w-full h-[300px] flex items-center justify-center">
              <Image src={img} alt={`Slide ${index + 1}`} width={600} height={300} className="rounded-md object-cover" />
            </div>
          ))}
        </Carousel>

        {/* Description */}
        <p className="mt-4 text-gray-700">{project.description}</p>

        {/* Technologies Used */}
        <p className="mt-2 text-gray-600 font-semibold">Technologies: {project.technologies}</p>

        <div className='flex flex-row gap-6'>

        {/* Project Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Visit Website
          </a>
        )}

{project.dashboard && (
          <a
            href={project.dashboard}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Visit CRM
          </a>
        )}
        </div>
      </div>
    </div>
  );
}

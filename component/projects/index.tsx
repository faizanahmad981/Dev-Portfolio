'use client';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Modal from './Modal';
import { FiPlus } from 'react-icons/fi'; // Importing plus icon from react-icons

import {carouselImg,truthkeep1,truthkeep2,truthkeep3,jointOfficeMain,carouselJointOffice,carouselJointOffice1,sellermargin,
    sellermargin1,sellermargin2,sellermargin3,sellermargin4,sellermargin5,sellermarginMockup,} from '@/assets/images';
    
type Project = {
  id: string;
  title: string;
  img: StaticImageData;
  description: string;
  technologies: string;
  images: StaticImageData[];
  link?: string;
  dashboard?: string;
};
const projects:Project[]  = [
  {
    id: 'project1',
    title: 'Joint Office Detector',
    img: jointOfficeMain,
    description: 'A Cross Platform React Native App that connects freelancers, remote workers, and professionals.',
    technologies: 'React Native, Firebase, Redux',
    images: [carouselJointOffice, carouselJointOffice1],
  },
  {
    id: 'project2',
    title: 'TruthKeep AI Base (Real-time-project)',
    img: carouselImg,
    link: 'https://www.truthkeep.ai/',
    description: 'AI Based Web Application that gathers politicians articles from the internet and gives sentiment scores.',
    technologies: 'Python, Scikit-Learn, Pandas, React.js',
    images: [truthkeep1, truthkeep2, truthkeep3],
  },
  
  {
    id: 'project3',
    title: 'Seller Margin Website & CRM (Real-time-project)',
    link: 'https://sellermargins-website.vercel.app/',
    dashboard:"https://sellar-margin-crm.vercel.app/dashboard",
    img: sellermarginMockup,
    description: 'Seller margin is a platform that connect different platforms like Amazon, eBay etc and provide us real time data for these. I have made responsive UI for this project. I have integrated clerk for auth flow and now integrating stripe for subscriptions.',
    technologies: 'Next JS ,Tailwind CSS ,Redux, API Integration',
    images: [sellermargin, sellermargin1,sellermargin2,sellermargin3,sellermargin4,sellermargin5],
  },
  {
    id: 'project4',
    title: 'Lumina-Xpert',
    link: ' https://lumina-xpert.vercel.app/',
    img: jointOfficeMain,
    description: '•	Front-end Remote Software Company LuminaXpert complete Website',
    technologies: 'React.Js ,Bootstrap',
    images: [carouselJointOffice, carouselJointOffice1],
  },
  {
    id: 'project5',
    title: 'Fitness GYM',
    link: 'https://fitness-gym-seven.vercel.app/',
    img: jointOfficeMain,
    description: 'Front-end GYM Complete Website',
    technologies: 'React js Bootstrap',
    images: [carouselJointOffice, carouselJointOffice1],
  },
  {
    id: 'project6',
    title: 'Nexcent-onepage-website',
    link: 'https://nexcent-website-rho.vercel.app/',
    img: jointOfficeMain,
    description: 'Simple Nexcent website Front-end one page using ',
    technologies: 'HTML CSS Bootstrap',
    images: [carouselJointOffice, carouselJointOffice1],
  },
  {
    id: 'project7',
    title: 'Foodi-onepage-website',
    link: ' https://react-bootstrap-food-webapp.vercel.app/',
    img: jointOfficeMain,
    description: 'Foodi website Front-end one page using',
    technologies: 'React js HTML CSS bootstrap',
    images: [carouselJointOffice, carouselJointOffice1],
  },
  {
    id: 'project8',
    title: 'Real State website-onepage-website',
    link: ' https://realstate-woad-seven.vercel.app/',
    img: jointOfficeMain,
    description: 'Real State website Front-end one page using React js HTML CSS bootstrap for beginner ',
    technologies: 'React js  bootstrap',
    images: [carouselJointOffice, carouselJointOffice1],
  },
];

export default function Portfolio() {
 const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-12 bg-gray-100">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {projects.map((project) => (
    <div
      key={project.id}
      className="cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image with Hover Effect */}
      <div className="relative group">
        <Image
          src={project.img}
          alt={project.title}
          width={400}
          height={300}
          className="rounded-lg shadow-lg w-full"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#aa94aa] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl">
          <FiPlus className="text-black text-6xl" />
        </div>
      </div>

      {/* Project Title (No Hover Effect) */}
      <h5 className="mt-4 text-lg font-medium">{project.title}</h5>
    </div>
  ))}
</div>


      


        {/* Modal for Project Details */}
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
}

import Image from 'next/image';
import { mouseImg, seoImg, uiUxImg, websiteImg } from '@/assets/images';

export default function Services() {
  return (
    <section id="services" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-12">
      <div className="container mx-auto px-12 text-center">
        <h2 className="text-white text-3xl font-bold mb-4  ">SERVICE OFFERS</h2>
        <p className="text-white text-lg mb-10">
          Is give may shall likeness made yielding spirit a itself togeth created after sea <br className="hidden lg:block" />
          is in beast beginning signs open god you're gathering ithe
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-2xl hover:animate-dance transition-all"
            >
              <div className="flex justify-center">
                <Image src={service.img} alt={service.title} width={80} height={80} />
              </div>
              <h5 className="uppercase text-xl font-semibold mt-4 mb-2">{service.title}</h5>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Web DEVELOPMENT',
    description: 'Web Development in React.js, Tailwind CSS',
    img: mouseImg,
  },
  {
    title: 'Mobile Application',
    description: 'Doing Mobile Application in React-Native',
    img: uiUxImg,
  },
  {
    title: 'Responsive Website',
    description: 'Convert Figma to HTML, CSS, Bootstrap',
    img: websiteImg,
  },
  {
    title: 'Assignments',
    description: 'Assignments and Final-Year-Projects',
    img: seoImg,
  },
];
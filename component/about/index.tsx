import { aboutme, bootstrapImg, cssFile, cssImg, htmlImg, nextImg, physicsImg, tailwindImg } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    <section
      id="about"
      className="py-10 bg-gradient-to-r from-purple-400 to-blue-500"
    >
      <div className="container mx-auto px-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
          <div>
            <Image
              src={aboutme}
              alt="Profile Image"
              width={400}
              height={400}
              className="rounded-lg border-4 border-dashed border-indigo-500"
            />
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                About Me
              </h3>
              <p className="text-gray-600">
                My name is Faizan Ahmed, and I am a Software Engineer who
                graduated from COMSATS University in January 2025. I enjoy
                building websites that are clean, responsive, and easy to use.
                <br /><br />I have hands-on experience working with React.js, Next.js,
                TypeScript, Tailwind CSS, and Bootstrap, along with practical
                expertise in Redux for state management. For API integration, I
                actively work with React Query, Axios, and Fetch API, enabling
                me to build scalable and efficient data-driven interfaces with
                smooth real-time updates. <br /><br />I enjoy transforming ideas into
                clean, reusable, and maintainable UI components while following
                best practices and modern frontend architecture patterns. Having
                worked on real-time projects, I’ve gained solid experience in
                UI/UX considerations, component structuring, and delivering
                smooth user experiences.
              </p>
              <Link
                href="https://drive.google.com/file/d/1Kt_bukbPHcAe9QaA1tbHy4qIeAfnnTjC/view?usp=drive_link"
                target="_blank"
                className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>

        {/* Technologies I Use */}
        <div className="mt-10 text-center">
          <h3 className="text-3xl font-bold text-white">Technologies I Use</h3>

          {/* Web Development */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-white">
              Web Development
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { src: htmlImg, name: "HTML5" },
                { src: cssImg, name: "CSS3" },
                { src: bootstrapImg, name: "Bootstrap" },
                { src: tailwindImg, name: "Tailwind CSS" },
                { src: physicsImg, name: "React.js" },
                { src: nextImg, name: "Next JS" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-28"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-700 font-medium mt-2">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
           <div className="mt-6">
            <h4 className="text-xl font-semibold text-white">
              API Integration
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { src: physicsImg, name: "Axios" },
                { src: physicsImg, name: "Fetch" },
                { src: physicsImg, name: "React Query" },
               
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-28"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-700 font-medium mt-2">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Application */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white">
              Mobile Application
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { src: physicsImg, name: "React Native" },
                { src: cssFile, name: "Native Base" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-28"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                  />
                  <span className="text-gray-700 font-medium mt-2">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

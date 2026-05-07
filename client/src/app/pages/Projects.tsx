import { ArrowUpRight } from "lucide-react";
import img1 from "@/assets/images/image01.jpg";
import img2 from "@/assets/images/card-3-Ka1ll87R.png";
import img3 from "@/assets/images/card-4-1lvzje-u.png";
import img4 from "@/assets/images/image04.jpg";

const projects = [
  {
    id: 1,
    title: "Billboard-HQ",
    category: "Featured Project",
    image: img1,
    description: "A modern, full-featured billboard advertising management platform with an integrated admin dashboard and marketplace.",
    github: "https://github.com/owen-stud123/Billboard-HQ.git",
  },
  {
    id: 2,
    title: "ShockWave",
    category: "Featured Project",
    image: img2,
    description: "This is a full-stack digital marketplace platform connecting creative professionals with businesses.",
    github: "https://github.com/owen-stud123/ShockWave.git",
    live: "https://shockwave-platform.vercel.app/",
  },
  {
    id: 3,
    title: "ubuzima connect",
    category: "Featured Project",
    image: img3,
    description: "Ubuzima Connect is a healthcare app on your phone that makes it easy to see a doctor. You can find doctors, book appointments, and manage all your health services in one place, saving time and making healthcare access easier.",
    github: "https://github.com/owen-stud123/ubuzima_connect.git",
  },
];

const Projects = () => {
  return (
    <div className="flex-1 px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto w-full">
      <div className="mb-16 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Selected Works
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl">
          A collection of projects exploring the intersection of design and technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300" />
            </div>
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 group-hover:underline decoration-1 underline-offset-4">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 hover:underline underline-offset-4"
                    >
                      Live version
                    </a>
                  )}
                </div>
              </div>
              <ArrowUpRight className="text-neutral-300 group-hover:text-neutral-900 transition-colors duration-300" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

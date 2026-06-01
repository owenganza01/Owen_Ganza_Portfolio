import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import img1 from "@/assets/images/image01.jpg";
import img2 from "@/assets/images/card-3-Ka1ll87R.png";
import img3 from "@/assets/images/card-4-1lvzje-u.png";
import img4 from "@/assets/images/image04.jpg";

const billboardScreenshots = Object.values(
  import.meta.glob("../../assets/images/Billboard_HQ/*.{png,jpg,jpeg,webp,gif}", {
    eager: true,
    import: "default",
  }),
).sort((first, second) => first.localeCompare(second)) as string[];

const ubuzimaScreenshots = Object.values(
  import.meta.glob("../../assets/images/ubuzima_connect/*.{png,jpg,jpeg,webp,gif}", {
    eager: true,
    import: "default",
  }),
).sort((first, second) => first.localeCompare(second)) as string[];

type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  previewImage?: string;
  previewMode?: "portrait" | "landscape";
  description: string;
  github: string;
  live?: string;
  screenshots?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    slug: "billboard-hq",
    title: "Billboard-HQ",
    category: "Featured Project",
    image: img1,
    previewImage: billboardScreenshots[0],
    previewMode: "landscape",
    description: "A modern, full-featured billboard advertising management platform with an integrated admin dashboard and marketplace.",
    github: "https://github.com/owen-stud123/Billboard-HQ.git",
    screenshots: billboardScreenshots,
  },
  {
    id: 2,
    slug: "shockwave",
    title: "ShockWave",
    category: "Featured Project",
    image: img2,
    description: "This is a full-stack digital marketplace platform connecting creative professionals with businesses.",
    github: "https://github.com/owen-stud123/ShockWave.git",
    live: "https://shockwave-platform.vercel.app/",
  },
  {
    id: 3,
    slug: "ubuzima-connect",
    title: "ubuzima connect",
    category: "Featured Project",
    image: img3,
    previewImage: ubuzimaScreenshots[0],
    previewMode: "portrait",
    description: "Ubuzima Connect is a healthcare app on your phone that makes it easy to see a doctor. You can find doctors, book appointments, and manage all your health services in one place, saving time and making healthcare access easier.",
    github: "https://github.com/owen-stud123/ubuzima_connect.git",
    screenshots: ubuzimaScreenshots,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setSelectedImageIndex(null);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setSelectedImageIndex(null);
  };

  return (
    <div className="relative flex-1 overflow-hidden px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto w-full">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-18 blur-[2px]"
        style={{ backgroundImage: `url(${img4})` }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/70 backdrop-blur-[1px]" />

      <div className="relative z-10 mb-16 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 drop-shadow-sm">
          Selected Works
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl">
          A collection of projects exploring the intersection of design and technology.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <button
              type="button"
              onClick={() => project.screenshots && project.screenshots.length > 0 && openGallery(project)}
              className="relative mb-6 block aspect-[4/3] w-full overflow-hidden bg-neutral-100 text-left"
              aria-label={
                project.screenshots && project.screenshots.length > 0
                  ? `Open ${project.title} image gallery`
                  : `${project.title} preview`
              }
              disabled={!project.screenshots || project.screenshots.length === 0}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/10" />
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  View gallery
                  <span className="text-white/70">{project.screenshots.length} images</span>
                </div>
              )}
            </button>

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

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => (!open ? closeGallery() : null)}>
        <DialogContent className="max-w-6xl overflow-hidden border-neutral-200 bg-white/95 p-0 backdrop-blur-md">
          {selectedProject && (
            <div className="flex max-h-[90vh] flex-col">
              <div className="flex justify-center bg-neutral-950 p-4 sm:p-6">
                <div
                  className={`w-full ${
                    selectedProject.previewMode === "portrait"
                      ? "max-w-[22rem]"
                      : "max-w-[68rem]"
                  }`}
                >
                  <img
                    src={selectedImageIndex === null
                      ? selectedProject.previewImage ?? selectedProject.image
                      : selectedProject.screenshots?.[selectedImageIndex] ?? selectedProject.previewImage ?? selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 p-5 sm:p-7">
                <DialogHeader className="text-left">
                  <DialogTitle className="text-xl text-neutral-900 sm:text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="max-w-2xl text-sm text-neutral-600 sm:text-base">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex gap-3 overflow-x-auto pb-1">
                  {selectedProject.screenshots?.map((screenshot, index) => (
                    <button
                      key={screenshot}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={`min-w-[92px] overflow-hidden rounded-2xl border transition-all ${
                        index === selectedImageIndex
                          ? "border-neutral-900 ring-2 ring-neutral-900"
                          : "border-neutral-200 hover:border-neutral-400"
                      }`}
                      aria-label={`Show ${selectedProject.title} image ${index + 1}`}
                    >
                      <img
                        src={screenshot}
                        alt={`${selectedProject.title} thumbnail ${index + 1}`}
                        className="h-24 w-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 hover:underline underline-offset-4"
                    >
                      Live version
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;

import { Code, Database, Palette, Layers, Terminal, Cpu, Globe, Layout as LayoutIcon } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <LayoutIcon className="w-6 h-6" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    category: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    items: ["Node.js", "PostgreSQL", "Supabase", "GraphQL", "Python"],
  },
  {
    category: "Design",
    icon: <Palette className="w-6 h-6" />,
    items: ["Figma", "UI/UX", "Prototyping", "Design Systems", "Wireframing"],
  },
  {
    category: "Tools & Others",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Git", "Docker", "CI/CD", "Jest", "Agile Methodologies"],
  },
];

const interests = [
  { name: "Open Source", icon: <Globe className="w-5 h-5" /> },
  { name: "Machine Learning", icon: <Cpu className="w-5 h-5" /> },
  { name: "Clean Code", icon: <Code className="w-5 h-5" /> },
  { name: "Architecture", icon: <Layers className="w-5 h-5" /> },
];

const Skills = () => {
  return (
    <div className="flex-1 px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto w-full">
      <div className="mb-16 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Skills & Interests
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="space-y-6 border-t border-neutral-200 pt-6">
            <div className="flex items-center space-x-3 text-neutral-900">
              {skillGroup.icon}
              <h2 className="text-2xl font-bold">{skillGroup.category}</h2>
            </div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-center text-neutral-600">
                  <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-neutral-900 text-white p-8 md:p-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-8 border-b border-neutral-700 pb-4">
          Interests & Hobbies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest) => (
            <div key={interest.name} className="flex flex-col items-center text-center space-y-3 p-4 hover:bg-neutral-800 transition-colors">
              <div className="p-3 bg-neutral-800 rounded-full">
                {interest.icon}
              </div>
              <span className="font-medium">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

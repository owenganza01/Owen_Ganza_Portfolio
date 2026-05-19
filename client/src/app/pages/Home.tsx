import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


const Home = () => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Professional Bio Section */}
      <section className="py-16 md:py-20 lg:py-24 px-6 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Professional Image removed */}
            
            {/* Bio Information */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  Owen Ganza
                </h2>
                <p className="text-xl font-semibold text-neutral-600">
                  Full-Stack Developer
                </p>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-md"> 
                I create beautiful and functional websites. Specializing in modern web technologies and user-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto w-full">
        <div className="space-y-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-neutral-900">
            Designing <span className="text-neutral-400">Digital</span> Experiences.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-md leading-relaxed">
            I'm a software engineering student at ALU focused on building data-driven web applications...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              to="/projects"
              className="flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all active:scale-95"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex w-full sm:w-auto items-center justify-center px-8 py-4 border border-neutral-200 text-neutral-900 font-medium hover:bg-neutral-100 transition-all active:scale-95"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-neutral-100 py-16 md:py-20 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <p className="text-2xl md:text-3xl font-light text-neutral-800 italic">
            "Simplicity is the ultimate sophistication."
          </p>
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
            — Leonardo da Vinci
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

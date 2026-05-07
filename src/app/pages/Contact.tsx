import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Message sent — thank you!');
      } else {
        const body = await res.json().catch(() => null);
        const msg = body?.error || (await res.text()) || 'Unknown error';
        alert('Failed to send message: ' + msg);
      }
    } catch (err: any) {
      alert('Failed to send message: ' + (err?.message || err));
    }
  };

  return (
    <div className="flex-1 px-6 py-12 md:py-16 lg:py-20 max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
              Have a project in mind or just want to say hello? I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-neutral-900 mt-1" />
              <div>
                <h3 className="font-bold text-neutral-900">Email</h3>
                <a
                  href="mailto:ganzaowen23@gmail.com"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  ganzaowen23@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-neutral-900 mt-1" />
              <div>
                <h3 className="font-bold text-neutral-900">Location</h3>
                <p className="text-neutral-600">Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200">
            <h3 className="font-bold text-neutral-900 mb-6">Connect</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/owen-stud123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors rounded-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ganza-owen-44a205327"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors rounded-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-50 p-8 border border-neutral-200 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: true })}
                className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                placeholder=" "
              />
              {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                placeholder=" "
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: true })}
                className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all resize-none"
                placeholder="You are free to ask anything..."
              />
              {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-900 text-white font-medium py-4 px-8 hover:bg-neutral-800 transition-all active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import type { PersonalData } from '../data';

export default function Hero({ data }: { data: PersonalData }) {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900 dark:text-white">{data.name}</span>
            <span className="block text-gradient">{data.title}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button
            type={'button'}
            onClick={scrollToAbout}
            className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Explore My Work
          </button>
          <div className="flex items-center space-x-6">
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button
          type={'button'}
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}

import { Code, Coffee, Users, Zap } from 'lucide-preact';
import type { AboutData } from '../data';


interface AboutProps {
  data: AboutData
}
export default function About({ data }: AboutProps) {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively in teams using modern development workflows"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly learning new technologies and exploring creative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {data.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.journey.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.text}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
              <img
                src={data.picture}
                alt="Developer workspace"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{data.experience.years}+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{data.experience.projects}+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl -z-10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md card-hover">
              <div className="text-slate-700 dark:text-slate-300 mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {highlight.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

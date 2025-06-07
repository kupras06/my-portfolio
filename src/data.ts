// API service for fetching portfolio data
export interface PersonalData {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
};

export interface AboutData {
  summary: string;
  journey: Array<{ id: string, text: string }>;
  picture: string;
  experience: {
    years: number;
    projects: number;
  };
};

export interface SkillData {
  [category: string]: Array<{
    name: string;
    level: number;
    color: string;
  }>;
};

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
};
export interface PortfolioData {
  personal: PersonalData
  about: AboutData
  skills: SkillData
  projects: ProjectData[]
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl = 'https://api.example.com') {
    this.baseUrl = baseUrl;
  }

  async fetchPortfolioData(): Promise<PortfolioData> {
    // Check if we have valid cached data
    try {
      const response = await fetch('https://api.npoint.io/e279faa19031fb9954ae');
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Failed to fetch portfolio data:', error);
      // Return fallback data if API fails
      return this.getFallbackData();
    }
  }

  getFallbackData(): PortfolioData {
    return {
      personal: {
        name: "Prashanth Kumar",
        title: "Full Stack Developer",
        description: "Crafting digital experiences with modern technologies. Passionate about clean code, innovative solutions, and building the future of web development.",
        email: "contact@example.com",
        phone: "+1 (555) 123-4567",
        location: "Bangalore, India",
        social: {
          github: "https://github.com",
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com"
        }
      },
      about: {
        summary: "I'm a passionate software developer with a love for creating digital experiences that make a difference. With expertise across the full stack, I enjoy turning complex problems into simple, beautiful solutions.",
        journey: [
          { id: "1", text: "Started my development journey with a curiosity for how things work under the hood. This led me to explore various programming languages, frameworks, and methodologies." },
          { id: "2", text: "Today, I specialize in modern web development, focusing on React, Node.js, and cloud technologies. I'm passionate about writing clean, performant code and staying up-to-date with industry trends." },
          { id: "3", text: "When I'm not coding, you'll find me contributing to open source projects, mentoring fellow developers, or exploring the latest in tech innovation." }
        ],
        picture: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
        experience: {
          years: 4,
          projects: 11
        }
      },
      skills: {
        Frontend: [
          { name: 'React/Preact', level: 95, color: 'bg-blue-500' },
          { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
          { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
          { name: 'Next.js', level: 85, color: 'bg-gray-800' },
          { name: 'Vue.js', level: 80, color: 'bg-green-500' },
          { name: 'Sass/SCSS', level: 85, color: 'bg-pink-500' }
        ],
        Backend: [
          { name: 'Node.js', level: 90, color: 'bg-green-600' },
          { name: 'Python', level: 85, color: 'bg-yellow-500' },
          { name: 'Express.js', level: 88, color: 'bg-gray-700' },
          { name: 'PostgreSQL', level: 82, color: 'bg-blue-700' },
          { name: 'MongoDB', level: 80, color: 'bg-green-700' },
          { name: 'REST APIs', level: 92, color: 'bg-orange-500' }
        ],
        DevOps: [
          { name: 'Docker', level: 85, color: 'bg-blue-500' },
          { name: 'AWS', level: 80, color: 'bg-orange-600' },
          { name: 'CI/CD', level: 82, color: 'bg-purple-500' },
          { name: 'Git', level: 95, color: 'bg-red-500' },
          { name: 'Linux', level: 78, color: 'bg-yellow-600' },
          { name: 'Nginx', level: 75, color: 'bg-green-600' }
        ],
        Tools: [
          { name: 'VS Code', level: 95, color: 'bg-blue-600' },
          { name: 'Figma', level: 80, color: 'bg-purple-600' },
          { name: 'Postman', level: 88, color: 'bg-orange-500' },
          { name: 'Webpack', level: 75, color: 'bg-blue-400' },
          { name: 'Vite', level: 90, color: 'bg-purple-500' },
          { name: 'ESLint', level: 85, color: 'bg-indigo-500' }
        ]
      },
      projects: [
        {
          title: "E-Commerce Platform",
          description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
          image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
          liveLink: "https://example.com",
          githubLink: "https://github.com",
          featured: true
        },
        {
          title: "Task Management App",
          description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
          image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
          liveLink: "https://example.com",
          githubLink: "https://github.com",
          featured: true
        },
        {
          title: "Weather Dashboard",
          description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
          image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
          liveLink: "https://example.com",
          githubLink: "https://github.com",
          featured: false
        },
        {
          title: "Social Media Analytics",
          description: "Analytics dashboard for social media performance tracking with data visualization and automated reporting features.",
          image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          technologies: ["Next.js", "Python", "D3.js", "AWS"],
          liveLink: "https://example.com",
          githubLink: "https://github.com",
          featured: false
        },
        {
          title: "Recipe Finder",
          description: "Recipe discovery app with AI-powered recommendations, meal planning features, and grocery list generation.",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          technologies: ["React Native", "Firebase", "OpenAI API"],
          liveLink: "https://example.com",
          githubLink: "https://github.com",
          featured: false
        },
        {
          title: "Portfolio Website",
          description: "Responsive portfolio website built with modern web technologies, featuring smooth animations and dark mode support.",
          image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          technologies: ["Preact", "Tailwind CSS", "Vite", "TypeScript"],
          liveLink: "https://example.com",
          githubLink: "https://github.com",
          featured: false
        }
      ]
    };
  }

  // Method to update the API base URL
  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }
}

export const apiService = new ApiService();

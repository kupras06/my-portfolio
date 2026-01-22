import { Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-slate-400" />
            <span>by a passionate developer</span>
          </div>
          <p className="text-slate-400 mb-6">
            Building the future of web development, one line of code at a time.
          </p>
          <div className="border-t border-slate-800 pt-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
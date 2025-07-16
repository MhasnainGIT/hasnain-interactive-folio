import { Star, Github } from "lucide-react";

interface HeaderProps {
  starCount?: number;
}

export const Header = ({ starCount = 113 }: HeaderProps) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-portfolio-text-muted">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Looking for a talent?
        </div>
        
        <div className="flex items-center gap-2 bg-portfolio-text text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-portfolio-text/90 transition-all duration-200 hover:scale-105">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{starCount}</span>
        </div>
      </div>
    </header>
  );
};
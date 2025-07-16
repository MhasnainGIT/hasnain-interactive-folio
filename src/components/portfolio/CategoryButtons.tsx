import { User, Briefcase, Code, Smile, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "me",
    label: "Me",
    icon: User,
    query: "Who are you? I want to know more about you."
  },
  {
    id: "projects", 
    label: "Projects",
    icon: Briefcase,
    query: "What are your projects? What are you working on right now?"
  },
  {
    id: "skills",
    label: "Skills", 
    icon: Code,
    query: "What are your skills? Give me a list of your soft and hard skills."
  },
  {
    id: "fun",
    label: "Fun",
    icon: Smile,
    query: "What's the craziest thing you've ever done? What are your hobbies?"
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    query: "How can I contact you?"
  }
];

export const CategoryButtons = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (query: string) => {
    navigate(`/chat?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center max-w-lg mx-auto">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.query)}
            className="flex flex-col items-center gap-2 p-4 bg-portfolio-card border border-portfolio-border rounded-2xl hover:bg-portfolio-hover transition-all duration-200 group min-w-[100px] hover:scale-105 active:scale-95 hover:shadow-lg"
          >
            <div className="w-8 h-8 text-portfolio-accent group-hover:scale-110 transition-transform duration-200">
              <Icon className="w-full h-full" />
            </div>
            <span className="text-sm font-medium text-portfolio-text-muted group-hover:text-portfolio-text transition-colors duration-200">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
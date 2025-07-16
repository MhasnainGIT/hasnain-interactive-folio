import { Header } from "@/components/portfolio/Header";
import { ProfileSection } from "@/components/portfolio/ProfileSection";
import { ChatInput } from "@/components/portfolio/ChatInput";
import { CategoryButtons } from "@/components/portfolio/CategoryButtons";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-portfolio-bg to-portfolio-hover/30 pointer-events-none" />
      
      <Header />
      
      <main className="relative pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <ProfileSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ChatInput />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CategoryButtons />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
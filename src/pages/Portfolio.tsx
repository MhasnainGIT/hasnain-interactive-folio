import { Header } from "@/components/portfolio/Header";
import { ProfileSection } from "@/components/portfolio/ProfileSection";
import { ChatInput } from "@/components/portfolio/ChatInput";
import { CategoryButtons } from "@/components/portfolio/CategoryButtons";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg relative">
      <Header />
      
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <ProfileSection />
          <ChatInput />
          <CategoryButtons />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
export const ProfileSection = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {/* Logo/Icon */}
      <div className="mb-8">
        <div className="w-12 h-12 mx-auto bg-portfolio-text rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">M</span>
        </div>
      </div>

      {/* Greeting */}
      <h2 className="text-portfolio-text-muted text-lg mb-2">
        Hey, I'm Mohammed 👋
      </h2>

      {/* Main Title */}
      <h1 className="font-bold text-3xl">Full Stack Developer Portfolio</h1>

      {/* Profile Avatar */}
      <div className="mb-12">
        <img 
          src="/hasnain.jpg" 
          alt="Mohammed Hasnain"
          className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};
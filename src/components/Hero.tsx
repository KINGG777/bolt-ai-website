import { ChefHat, Clock, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-orange-800/85 to-red-900/90 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Indian cuisine"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-orange-200 font-medium">Authentic Odia & Indian Cuisine</p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Maa Samaleswari
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-3 text-orange-300">
              Restaurant
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-orange-100 mb-4 max-w-3xl mx-auto font-light">
            Where Tradition Meets Taste
          </p>

          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Experience the divine flavors of authentic Odia and Indian cuisine, prepared with love and served with warmth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 hover:shadow-2xl hover:scale-105 transition-all"
            >
              Book a Table
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('menu');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 hover:shadow-2xl hover:scale-105 transition-all"
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
            <ChefHat className="w-12 h-12 text-orange-300 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Expert Chefs</h3>
            <p className="text-orange-100 text-center">Traditional recipes passed down through generations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
            <Clock className="w-12 h-12 text-orange-300 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Fresh Daily</h3>
            <p className="text-orange-100 text-center">Ingredients sourced fresh every morning</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
            <Award className="w-12 h-12 text-orange-300 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Quality Service</h3>
            <p className="text-orange-100 text-center">Exceptional dining experience guaranteed</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

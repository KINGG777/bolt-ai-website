import { Heart, Users, Sparkles, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish is prepared with care and passion"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Atmosphere",
      description: "A warm, welcoming space for all celebrations"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Authentic Flavors",
      description: "Traditional recipes from Odisha and across India"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "Locally sourced, premium quality ingredients"
    }
  ];

  const gallery = [
    "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Story</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to Maa Samaleswari Restaurant
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Named after the revered goddess Maa Samaleswari, our restaurant is a tribute to the rich culinary heritage of Odisha and India. Since our inception, we have been dedicated to bringing authentic flavors and traditional recipes to your table.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our journey began with a simple vision: to create a space where families and friends can gather to enjoy delicious, home-style cooking in a warm and inviting atmosphere. Every dish we serve tells a story of tradition, culture, and the love we pour into our craft.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From classic Odia delicacies to popular North and South Indian favorites, our menu celebrates the diversity and richness of Indian cuisine. We use only the finest ingredients and time-honored cooking techniques to ensure every meal is an unforgettable experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Restaurant ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-orange-100"
            >
              <div className="text-red-600 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Today's Special</h3>
          <p className="text-xl mb-2 font-semibold">Dalma & Pakhala Bhata</p>
          <p className="text-orange-100 mb-6">
            Traditional Odia comfort food - Mixed vegetable and lentil curry with fermented rice
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <p className="text-2xl font-bold">₹149 only</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

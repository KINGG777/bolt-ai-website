import { Star, Quote } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

const Testimonials = () => {
  const reviews: Review[] = [
    {
      name: "Rajesh Kumar",
      location: "Sambalpur",
      rating: 5,
      comment: "Authentic Odia flavors that remind me of home! The Dalma and Pakhala are just like my mother used to make. Best restaurant in the city!",
      date: "2 weeks ago"
    },
    {
      name: "Priya Sharma",
      location: "Bhubaneswar",
      rating: 5,
      comment: "Wonderful experience! The ambiance is warm and the service is excellent. The Machha Besara was absolutely delicious. Will definitely come back!",
      date: "1 month ago"
    },
    {
      name: "Amit Patel",
      location: "Rourkela",
      rating: 5,
      comment: "Great food at reasonable prices. The biryani is amazing and the staff is very friendly. Perfect place for family dinners.",
      date: "3 weeks ago"
    },
    {
      name: "Sneha Das",
      location: "Cuttack",
      rating: 5,
      comment: "The Chhena Poda and Rasgulla are to die for! Authentic Odia sweets that taste just perfect. Love this place!",
      date: "1 week ago"
    },
    {
      name: "Vikram Singh",
      location: "Jharsuguda",
      rating: 5,
      comment: "Best North Indian food in the area. The Tandoori Chicken is perfectly cooked and the naans are soft and buttery. Highly recommended!",
      date: "2 months ago"
    },
    {
      name: "Ananya Mishra",
      location: "Bargarh",
      rating: 5,
      comment: "Lovely restaurant with amazing food! The Paneer Butter Masala is creamy and delicious. Great place for vegetarians too!",
      date: "3 weeks ago"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Customer <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our happy customers have to say about their dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-orange-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-200" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{review.comment}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-orange-100">
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">4.9</p>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-orange-100">Average Rating</p>
              </div>
              <div className="w-px h-16 bg-white/30 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">1000+</p>
                <p className="text-orange-100">Happy Customers</p>
              </div>
              <div className="w-px h-16 bg-white/30 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-orange-100">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useState } from 'react';
import { Sunrise, Sun, Moon, Zap } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  vegetarian?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  items: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuData: MenuCategory[] = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: <Sunrise className="w-6 h-6" />,
      items: [
        { name: 'Idli Sambhar', description: 'Steamed rice cakes with lentil curry', price: 60, vegetarian: true },
        { name: 'Masala Dosa', description: 'Crispy crepe with spiced potato filling', price: 80, vegetarian: true },
        { name: 'Poha', description: 'Flattened rice with vegetables and spices', price: 50, vegetarian: true },
        { name: 'Aloo Paratha', description: 'Stuffed flatbread with potato filling', price: 70, vegetarian: true },
        { name: 'Chhena Poda Toast', description: 'Traditional Odia cottage cheese dessert', price: 65, vegetarian: true },
        { name: 'Upma', description: 'Savory semolina porridge with vegetables', price: 55, vegetarian: true }
      ]
    },
    {
      id: 'lunch',
      name: 'Lunch',
      icon: <Sun className="w-6 h-6" />,
      items: [
        { name: 'Dalma Thali', description: 'Traditional Odia lentil curry with rice and sides', price: 180, vegetarian: true },
        { name: 'Machha Besara', description: 'Fish curry in mustard gravy', price: 220 },
        { name: 'Chicken Curry', description: 'Traditional Indian style chicken curry', price: 200 },
        { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato gravy', price: 180, vegetarian: true },
        { name: 'Biryani (Chicken)', description: 'Fragrant rice with spiced chicken', price: 220 },
        { name: 'Biryani (Veg)', description: 'Aromatic rice with mixed vegetables', price: 160, vegetarian: true },
        { name: 'Pakhala Bhata', description: 'Fermented rice with traditional sides', price: 120, vegetarian: true },
        { name: 'Chhena Jhili', description: 'Sweet cottage cheese fritters in syrup', price: 80, vegetarian: true }
      ]
    },
    {
      id: 'dinner',
      name: 'Dinner',
      icon: <Moon className="w-6 h-6" />,
      items: [
        { name: 'Tandoori Chicken', description: 'Clay oven roasted chicken with spices', price: 280 },
        { name: 'Mutton Rogan Josh', description: 'Aromatic lamb curry from Kashmir', price: 320 },
        { name: 'Dal Makhani', description: 'Creamy black lentils cooked overnight', price: 150, vegetarian: true },
        { name: 'Kadhai Paneer', description: 'Cottage cheese with peppers in kadhai', price: 190, vegetarian: true },
        { name: 'Butter Naan', description: 'Soft leavened bread with butter', price: 40, vegetarian: true },
        { name: 'Garlic Naan', description: 'Naan bread topped with garlic', price: 50, vegetarian: true },
        { name: 'Rasgulla', description: 'Iconic Odia cottage cheese balls in syrup', price: 60, vegetarian: true },
        { name: 'Gulab Jamun', description: 'Deep fried milk solids in rose syrup', price: 65, vegetarian: true }
      ]
    },
    {
      id: 'fastfood',
      name: 'Fast Food',
      icon: <Zap className="w-6 h-6" />,
      items: [
        { name: 'Veg Momos', description: 'Steamed dumplings with vegetable filling', price: 80, vegetarian: true },
        { name: 'Chicken Momos', description: 'Steamed dumplings with chicken filling', price: 100 },
        { name: 'Veg Chowmein', description: 'Stir-fried noodles with vegetables', price: 90, vegetarian: true },
        { name: 'Chicken Chowmein', description: 'Stir-fried noodles with chicken', price: 120 },
        { name: 'Veg Fried Rice', description: 'Wok-tossed rice with vegetables', price: 100, vegetarian: true },
        { name: 'Chicken Fried Rice', description: 'Wok-tossed rice with chicken', price: 130 },
        { name: 'Paneer Tikka Roll', description: 'Grilled paneer wrap with chutney', price: 110, vegetarian: true },
        { name: 'Chicken Tikka Roll', description: 'Grilled chicken wrap with sauces', price: 130 }
      ]
    }
  ];

  const activeMenu = menuData.find(cat => cat.id === activeCategory) || menuData[0];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our diverse menu featuring authentic Odia delicacies and popular Indian favorites
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMenu.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-orange-100"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                {item.vegetarian && (
                  <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  ₹{item.price}
                </span>
                <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

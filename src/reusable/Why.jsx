import React from "react";

const Why = () => {
  return (
   <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Delicious?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional cooking techniques with modern innovation to create unforgettable dining experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Fresh Ingredients</h3>
            <p className="text-green-100">
              We source the finest ingredients from local farms and suppliers to ensure quality and freshness in every
              dish.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Expert Chefs</h3>
            <p className="text-blue-100">
              Our culinary team brings years of experience and passion to create innovative dishes that delight your
              senses.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Elegant Atmosphere</h3>
            <p className="text-purple-100">
              Enjoy your meal in our beautifully designed dining space that combines comfort with sophisticated
              ambiance.
            </p>
          </div>
        </div>
      </main>
  );
};

export default Why;

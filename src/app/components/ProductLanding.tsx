import React from "react";

const ProductLanding = () => {
  return (
    <div className="container mx-auto py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-600">20% Discount On All Products</h2>
        <p className="text-xl font-semibold mt-4">Cams Sofa Compact</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Product Image */}
        <div className="relative">
          <img
            src="/images/sofa.jpg" // Replace with your image URL
            alt="Cams Sofa Compact"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 w-24 h-24 bg-white opacity-75 rounded-full"></div>
        </div>

        {/* Description and Features */}
        <div className="mt-8 lg:mt-0 lg:ml-12">
          {/* Product Description */}
          <p className="text-lg text-gray-600 mb-6">
            Designed with a blend of modern aesthetics and durable materials, this armchair is the perfect addition to any living space.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            {[
              "Material exposed like metals",
              "Clear lines and geometric figures",
              "Simple neutral colors",
              "Material exposed like metals", // Repeated intentionally
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-gray-800 text-lg"
              >
                <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <button className="mt-8 px-6 py-3 bg-pink-500 text-white text-lg rounded-lg shadow-md hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;

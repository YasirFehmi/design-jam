import React from "react";
import { FaShippingFast, FaHeadset, FaStar, FaMoneyCheckAlt } from "react-icons/fa"; // Icons for benefits

const benefits = [
  {
    title: "Quality Products",
    description: "We offer the best quality products that are reliable and durable.",
    icon: <FaStar />,
    bgColor: "bg-gradient-to-r from-green-400 to-blue-500", // Gradient background
  },
  {
    title: "Quick Delivery",
    description: "Fast shipping times to get your order delivered on time.",
    icon: <FaShippingFast />,
    bgColor: "bg-gradient-to-r from-pink-400 to-orange-500",
  },
  {
    title: "Flexible Pricing",
    description: "We provide various pricing options to fit your budget.",
    icon: <FaMoneyCheckAlt />,
    bgColor: "bg-gradient-to-r from-purple-400 to-pink-500",
  },
  {
    title: "24/7 Support",
    description: "Our customer support team is available anytime you need help.",
    icon: <FaHeadset />,
    bgColor: "bg-gradient-to-r from-yellow-400 to-red-500",
  },
];

const BenefitsSection = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-white ${benefit.bgColor} flex flex-col items-center`}
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;

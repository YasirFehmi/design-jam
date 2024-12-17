import { FaShippingFast, FaHeadset, FaLock, FaMoneyCheckAlt } from 'react-icons/fa';

const ShopExOffer = () => {
  return (
    <section className="shopex-offer bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-center space-x-4">
          <FaShippingFast className="text-blue-500 text-3xl" />
          <div>
            <h3 className="font-bold text-lg">Free Shipping</h3>
            <p className="text-gray-600">On orders over $50.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaHeadset className="text-blue-500 text-3xl" />
          <div>
            <h3 className="font-bold text-lg">24/7 Support</h3>
            <p className="text-gray-600">We&apos;re here to help.</p> {/* Fixed here */}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaLock className="text-blue-500 text-3xl" />
          <div>
            <h3 className="font-bold text-lg">Secure Payment</h3>
            <p className="text-gray-600">100% secure payments.</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaMoneyCheckAlt className="text-blue-500 text-3xl" />
          <div>
            <h3 className="font-bold text-lg">Money-Back Guarantee</h3>
            <p className="text-gray-600">30 days refund policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopExOffer;

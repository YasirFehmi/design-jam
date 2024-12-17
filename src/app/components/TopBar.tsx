import Link from "next/link";

const HeadingBar = () => {
  return (
    <div className="bg-purple-600 text-white py-2 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Email and Phone */}
        <div className="flex space-x-6">
          <span>
            📧 <a href="mailto:mhhasan@gmail.com">mhhasan@gmail.com</a>
          </span>
          <span>📞 (12345)67890</span>
        </div>

        {/* Right Section: Links */}
        <div className="flex space-x-6">
          <Link href="/language">English</Link>
          <Link href="/currency">USD</Link>
          <Link href="/login">Login</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/cart">🛒</Link>
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;

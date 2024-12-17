import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">Hekto</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Search */}
        <div className="flex items-center space-x-2 border px-4 py-2 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none flex-grow"
          />
          <button>
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

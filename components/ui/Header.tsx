import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
          TradePro
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/features" className="hover:text-emerald-500 transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-emerald-500 transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
        </nav>
        <div className="flex space-x-4">
          <Link href="/auth/sign-in" className="px-4 py-2 rounded-lg hover:bg-emerald-500/10 transition-colors">Sign In</Link>
          <Link href="/auth/sign-up" className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
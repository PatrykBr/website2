import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">TradePro</h3>
            <p className="text-gray-500 mt-4">The ultimate AI-powered trading platform for professionals.</p>
          </div>
          <div>
            <h4 className="font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/features" className="hover:text-emerald-500 transition-colors">Features</a></li>
              <li><a href="/pricing" className="hover:text-emerald-500 transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500">
          © 2023 TradePro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
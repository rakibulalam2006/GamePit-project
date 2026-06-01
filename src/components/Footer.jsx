
import {
  FaGamepad,
  FaDiscord,
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content mt-3">
      {/* Main Footer Content */}
      <div className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 max-w-7xl mx-auto">
        {/* Column 1 - Branding & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaGamepad className="text-3xl text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              GamePit
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            The ultimate gaming platform where competitive spirit meets casual
            fun. Join our community of millions of gamers worldwide.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaDiscord className="w-5 h-5" />
            </Link>
            <Link
              
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaTwitch className="w-5 h-5" />
            </Link>
            <Link
              
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <FaYoutube className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <span className="footer-title text-base-content/80 font-bold uppercase tracking-wider">
            Quick Links
          </span>
          <div className="flex flex-col gap-2 mt-3">
            <Link
              to="/"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/allGames"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Games Library
            </Link>
            <Link
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Tournaments
            </Link>
            <Link
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Leaderboards
            </Link>
            <Link
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Support Center
            </Link>
          </div>
        </div>

        {/* Column 3 - Legal & Info */}
        <div>
          <span className="footer-title text-base-content/80 font-bold uppercase tracking-wider">
            Legal
          </span>
          <div className="flex flex-col gap-2 mt-3">
            <Link
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              EULA
            </Link>
            <Link
              to="#"
              className="link link-hover text-sm hover:text-primary transition-colors"
            >
              Licenses
            </Link>
          </div>
        </div>

        {/* Column 4 - Contact & Community */}
        <div>
          <span className="footer-title text-base-content/80 font-bold uppercase tracking-wider">
            Connect
          </span>
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-primary" />
              <Link
                to="#"
                className="link link-hover hover:text-primary"
              >
                hello@gamepit.com
              </Link >
            </div>
            <div className="mt-2">
              <button className="btn btn-outline btn-sm btn-primary gap-2">
                <FaDiscord /> Join Discord
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              DMCA & Copyright agent: legal@gamepit.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-base-300/20 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <span>© {currentYear} GamePit. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <FaHeart className="text-red-500 w-3 h-3 animate-pulse" />
            <span>for gamers worldwide</span>
          </div>
          <div className="flex gap-4">
            <Link to="#" className="link link-hover text-xs hover:text-primary">
              Sitemap
            </Link>
            <Link to="#" className="link link-hover text-xs hover:text-primary">
              Accessibility
            </Link>
            <Link to="#" className="link link-hover text-xs hover:text-primary">
              Press Kit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

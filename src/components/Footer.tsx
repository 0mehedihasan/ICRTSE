import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <img src="/logo.png" alt="Logo" className="h-24" />
            <h3 className="mb-4 text-lg font-bold text-white">ICRCS 2025</h3>
            <p className="mb-4 text-secondary-300">
              4th International Congress on Recent Trends in Computer Science
              (ICRCS 2025) - Bringing together researchers, academics, and
              industry professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/committee"
                  className="text-secondary-300 hover:text-white"
                >
                  Committee
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="text-secondary-300 hover:text-white"
                >
                  Speakers
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-secondary-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={20}
                  className="flex-shrink-0 mt-1 text-primary-400"
                />
                <span className="text-secondary-300">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="mailto:icrcs@ieee.org"
                  className="text-secondary-300 hover:text-white"
                >
                  icrcs@ieee.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="tel: +880 1710 048394"
                  className="text-secondary-300 hover:text-white"
                >
                  +880 1710 048394 (Registration Chair)
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0 text-primary-400" />
                <a
                  href="tel: +880 1710 048394"
                  className="text-secondary-300 hover:text-white"
                >
                  +880 1985 419558 (Ambassador Chair)
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/icrcsbd"
              target="_blank"
              className="text-secondary-300 hover:text-white"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/icrcsbd/"
              target="_blank"
              className="text-secondary-300 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:icrcs@ieee.org"
              className="text-secondary-300 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        {/* <div>
          <h3 className="mb-4 text-lg font-bold text-white">Important Dates</h3>
          <ul className="space-y-2">
            <li className="text-secondary-300">
              <span className="font-semibold">Paper Submission:</span> June 15,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Notification:</span> August 1,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Camera Ready:</span> September 1,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Registration:</span> September 15,
              2025
            </li>
            <li className="text-secondary-300">
              <span className="font-semibold">Conference:</span> October 10-12,
              2025
            </li>
          </ul>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="py-4 text-center bg-secondary-950">
        <p className="text-sm text-secondary-400">
          &copy; {new Date().getFullYear()} ICRCS 2025. All rights reserved.
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/mdadul"
            className="text-primary-400 hover:text-primary-500"
          >
            Emdadul Islam
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook,  Linkedin, Phone, MapPin } from "lucide-react"
import { SiBehance } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center"></span>
              Pipepro
            </h3>
            <p className="mb-6 leading-relaxed">
              Proin pretium sem libero, nec aliquet augue lobortis in.
              Phasellus nibh quam, molestie.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <SiBehance className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>Drip Detectives</li>
              <li>Leak Stop Specialists</li>
              <li>Pipe Dream Team</li>
              <li>Rapid Repair Squad</li>
              <li>Clear Flow Plumbers</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>About Us</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Faqs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white">Call Now</p>
                  <p className="text-gray-400">+125 (895) 658 568</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white">Office Address</p>
                  <p className="text-gray-400">66 Broklyant, New India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © Pipepro 2024 | All Rights Reserved
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white text-sm transition-colors">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-white text-sm transition-colors">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

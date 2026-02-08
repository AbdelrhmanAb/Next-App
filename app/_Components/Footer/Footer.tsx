// components/FooterFull.tsx
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  UtensilsCrossed,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
            <UtensilsCrossed size={26}/> Diverse Cuisine Restaurant
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            We serve the finest dishes from international cuisines with an authentic oriental touch. 
            Our mission is to make every meal a memorable experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="" className="hover:text-yellow-400">Menu</Link></li>
            <li><Link href="" className="hover:text-yellow-400">Offers</Link></li>
            <li><Link href="" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="" className="hover:text-yellow-400">Contact</Link></li>
            <li><Link href="" className="hover:text-yellow-400">Book a Table</Link></li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={18}/> +20 123 456 7890</li>
            <li className="flex items-center gap-2"><Mail size={18}/> info@restaurant.com</li>
            <li className="flex items-center gap-2"><MapPin size={18}/> Nile Street, Cairo</li>
          </ul>
          <h4 className="mt-6 text-yellow-300 font-semibold flex items-center gap-2">
            <Clock size={18}/> Opening Hours
          </h4>
          <p className="text-sm text-gray-400 mt-2">
            Sat - Thu: 12:00 PM - 12:00 AM <br/>
            Friday: 2:00 PM - 1:00 AM
          </p>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Newsletter</h3>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button 
               
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 mt-6">
            <Link href="" target="_blank" className="hover:text-yellow-400"><Facebook size={22}/></Link>
            <Link href="" target="_blank" className="hover:text-yellow-400"><Instagram size={22}/></Link>
            <Link href="" target="_blank" className="hover:text-yellow-400"><Twitter size={22}/></Link>
          </div>

          <div className="flex gap-3 mt-6 text-gray-400 text-sm">
            <CreditCard size={20}/> We accept all payment methods
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Diverse Cuisine Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
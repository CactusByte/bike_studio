import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/service" className="hover:text-blue-400">Service</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> 123 Bike Street, Cycle City, CC 12345</li>
              <li className="flex items-center"><Phone className="mr-2 h-4 w-4" /> (555) 123-4567</li>
              <li className="flex items-center"><Mail className="mr-2 h-4 w-4" /> info@bikeshop.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 5pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Bike Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


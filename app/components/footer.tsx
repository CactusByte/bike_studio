import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-amber-800">Home</Link></li>
              <li><Link href="/service" className="hover:text-amber-800">Service</Link></li>
              <li><Link href="/contact" className="hover:text-amber-800">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> SVS Plaza II, Km 149.5 PR-2 Suite 311, Mayagüez, 00680</li>
              <li className="flex items-center"><Phone className="mr-2 h-4 w-4" /> (787) 831-3050</li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Jueves - Sabado: 9am - 6pm</li>
              <li>Domingo: 11am - 4pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-800 text-center">
          <p>&copy; {new Date().getFullYear()} The Bike Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


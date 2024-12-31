import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <p>123 Bike Street, Cycle City, CC 12345</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <p>info@bikeshop.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Opening Hours</h2>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


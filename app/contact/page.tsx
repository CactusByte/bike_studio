import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact Us</h1>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <p>SVS Plaza II, Km 149.5 PR-2 Suite 311, Mayagüez, 00680</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <p>(787) 831-3050</p>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-2">Opening Hours</h2>
              <p>Jueves - Sabado: 9am - 6pm</p>
              <p>Domingo: 11am - 4pm</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


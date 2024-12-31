'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bike, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavItems = () => (
    <>
      <Link href="/" className="text-white hover:text-amber-800 px-3 py-2 rounded-md text-sm font-medium">
        Home
      </Link>
      <Link href="/service" className="text-white hover:text-amber-800 px-3 py-2 rounded-md text-sm font-medium">
        Service
      </Link>
      <Link href="/contact" className="text-white hover:text-amber-800 px-3 py-2 rounded-md text-sm font-medium">
        Contact
      </Link>
    </>
  )

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* <Bike className="h-8 w-8 text-amber-800" /> */}
              <span className="ml-2 text-xl font-bold text-white">The Bike <span className='text-amber-800'>Studio</span></span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <NavItems />
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-black">
                <nav className="flex flex-col space-y-4 mt-4">
                  <NavItems />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}


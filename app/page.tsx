import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Premium Bike Helmets",
    description: "Safety meets style with our collection of premium helmets",
    image: "/placeholder.svg?height=300&width=400",
    size: "half",
  },
  {
    name: "Shop Online, Visit In-Store",
    description: "Choose convenience or hands-on experience - we support both!",
    image: "/placeholder.svg?height=300&width=400",
    size: "half",
  },
  {
    name: "Professional Bike Gear",
    description:
      "From casual riders to professionals, we have gear for every cyclist",
    image: "/placeholder.svg?height=400&width=800",
    size: "full",
  },
  {
    name: "Virtual Bike Fitting",
    description:
      "Get the perfect fit from home with our virtual fitting service",
    image: "/placeholder.svg?height=300&width=400",
    size: "half",
  },
  {
    name: "Expert Maintenance",
    description: "Professional maintenance services by certified technicians",
    image: "/placeholder.svg?height=300&width=400",
    size: "half",
  },
];

const brands = [
  { name: "Brand A", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand B", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand C", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Brand D", logo: "/placeholder.svg?height=100&width=200" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-[500px]">
        <Image
          src="/banner.jpg"
          alt="Bike shop hero image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to The Bike Studio
            </h1>
            <p className="text-xl mb-8">
              Discover the joy of cycling with our premium bikes and accessories
            </p>
            <div className="space-x-4">
              <Button
                asChild
                variant="secondary"
                className="w-auto mb-2 sm:mb-0 bg-white text-black hover:bg-amber-800 hover:text-white transition-colors duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-auto bg-white text-black hover:bg-amber-800 hover:text-white transition-colors duration-300"
              >
                <Link href="/service">Book a Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Discover Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">
            {products.map((product) => (
              <Card
                key={product.name}
                className={`overflow-hidden ${
                  product.size === "full" ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={product.size === "full" ? 800 : 400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={200}
                  height={100}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

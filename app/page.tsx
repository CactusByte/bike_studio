import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Mountain Bikes",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut euismod purus non imperdiet congue. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
    Integer quis odio nisi. Vestibulum finibus arcu vitae enim porttitor, vel lacinia urna vestibulum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris ut sollicitudin eros. Sed elementum nibh aliquam nunc sagittis, a suscipit leo varius. 
    Donec at rutrum dolor. Mauris lectus purus, congue sit amet sollicitudin quis, maximus a tellus. 
    Nam dictum suscipit urna.`,
    image: "/bmc-mtb.jpeg?height=600&width=600",
  },
  {
    name: "Road Bikes",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut euismod purus non imperdiet congue. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
    Integer quis odio nisi. Vestibulum finibus arcu vitae enim porttitor, vel lacinia urna vestibulum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris ut sollicitudin eros. Sed elementum nibh aliquam nunc sagittis, a suscipit leo varius. 
    Donec at rutrum dolor. Mauris lectus purus, congue sit amet sollicitudin quis, maximus a tellus. 
    Nam dictum suscipit urna.`,
    image: "/road.jpeg?height=600&width=600",
  },
  {
    name: "Premium Bike Helmets",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut euismod purus non imperdiet congue. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
    Integer quis odio nisi. Vestibulum finibus arcu vitae enim porttitor, vel lacinia urna vestibulum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris ut sollicitudin eros. Sed elementum nibh aliquam nunc sagittis, a suscipit leo varius. 
    Donec at rutrum dolor. Mauris lectus purus, congue sit amet sollicitudin quis, maximus a tellus. 
    Nam dictum suscipit urna.`,
    image: "/helmets.jpeg?height=600&width=600",
  },
  {
    name: "Professional Bike Accessories",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Ut euismod purus non imperdiet congue. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
    Integer quis odio nisi. Vestibulum finibus arcu vitae enim porttitor, vel lacinia urna vestibulum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris ut sollicitudin eros. Sed elementum nibh aliquam nunc sagittis, a suscipit leo varius. 
    Donec at rutrum dolor. Mauris lectus purus, congue sit amet sollicitudin quis, maximus a tellus. 
    Nam dictum suscipit urna.`,
    image: "/garmin.jpeg?height=600&width=600",
  },
];

const brands = [
  { name: "BMC", logo: "/bmc.png?height=100&width=200" },
  { name: "Cube", logo: "/cube.png?height=100&width=200" },
  { name: "Corratec", logo: "/corratec.png?height=100&width=200" },
  { name: "Felt", logo: "/felt.png?height=100&width=200" },
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
              Welcome to <span className="text-gray-300">The Bike Studio</span>
            </h1>
            <p className="text-xl mb-8">
              The Bike Studio, ofrecemos lo mejor en ciclismo. Distribuidores
              oficiales de BMC, Felt, CUBE y Corratec, entre otras marcas
              líderes.<br></br> Equipamos a ciclistas con tecnología y estilo en cada
              rodada. <br></br>¡Visítanos en Mayagüez!
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
          {/* <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Discover Our Products</h2> */}
          <div className="space-y-12 sm:space-y-16">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full sm:w-1/2">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2 space-y-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          {/* <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Brands</h2> */}
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

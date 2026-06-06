import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VehicleGrid } from "@/components/VehicleGrid";
import { ProductGrid } from "@/components/ProductGrid";
import { RFQForm } from "@/components/RFQForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      <section id="models" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Japanese & Hybrid Vehicle Specialists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Providing precise-fitment body parts and lighting systems for top Japanese brands.</p>
          </div>
          <VehicleGrid />
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Core Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Wholesale headlights, tail lights, and exterior components with raw material traceability.</p>
          </div>
          <ProductGrid />
        </div>
      </section>

      <FAQ />

      <section id="rfq" className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Fast Response Inquiry</h2>
            <p className="text-blue-100 text-lg">Response Time ≤ 1 Hour | OEM & ODM Support | Multi-Factory Supply Chain</p>
          </div>
          <RFQForm />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

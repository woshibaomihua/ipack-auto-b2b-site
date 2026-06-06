import { SITE_INFO } from "@/lib/constants";
import { SquareMessage } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[650px] flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block bg-primary px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-6">
            Global Wholesale Supplier
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Japanese & Hybrid <span className="text-primary">Auto Parts</span> Specialist
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            I-PACK Auto Parts: 7+ years of expertise in Toyota, Honda, and Suzuki spare parts. OEM/ODM customization with 100% quality guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#rfq" className="btn-primary text-lg px-8 py-4">Send Inquiry Now</a>
            <a 
              href={SITE_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded font-bold transition-all text-center flex items-center justify-center gap-2"
            >
              <SquareMessage size={20} /> Chat on WhatsApp
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Alibaba Verified Supplier
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              4.9/5 Trust Rating
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Response Time ≤ 1h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SITE_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-primary mb-4 italic">I-PACK</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Professional supplier of Japanese & Hybrid vehicle body parts. Committed to raw material traceability and 100% finished product inspection.
          </p>
          <div className="flex space-x-4">
            <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">FB</span>
            <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">IN</span>
            <span className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">YT</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Main Models</h4>
          <ul className="text-gray-400 space-y-3 text-sm">
            <li>Toyota Prius / Corolla / Camry</li>
            <li>Toyota Hiace / RAV4</li>
            <li>Honda Civic / CR-V</li>
            <li>Suzuki Swift</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Service</h4>
          <ul className="text-gray-400 space-y-3 text-sm">
            <li>OEM/ODM Customization</li>
            <li>Raw Material Traceability</li>
            <li>Quality Control Reports</li>
            <li>Fast Global Logistics</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="text-gray-400 space-y-3 text-sm">
            <li>Email: {SITE_INFO.contact.email}</li>
            <li>WhatsApp: {SITE_INFO.contact.whatsapp}</li>
            <li>Address: {SITE_INFO.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        © 2026 {SITE_INFO.companyName}. All Rights Reserved. 7 Years Gold Supplier.
      </div>
    </footer>
  );
}

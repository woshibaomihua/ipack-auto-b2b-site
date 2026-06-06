"use client";
import { useState } from "react";
import { SITE_INFO } from "@/lib/constants";
import { SendHorizontal, MessageSquare, UploadCloud } from "lucide-react";

export function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-md border border-white/20 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Inquiry Sent Successfully!</h3>
        <p className="text-blue-100 mb-6">Our sales team will contact you within 1 hour during business hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={SITE_INFO.contact.whatsappLink} className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            <MessageSquare size={20} /> Chat on WhatsApp
          </a>
          <button onClick={() => setSubmitted(false)} className="text-white underline">Send another inquiry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-2xl text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Part Name / OE Number*</label>
            <input required type="text" placeholder="e.g. Headlight 81110-47400" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Vehicle Model & Year*</label>
            <input required type="text" placeholder="e.g. Toyota Prius 2012" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-1">Quantity*</label>
              <input required type="number" placeholder="Sets/Pcs" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Country*</label>
              <input required type="text" placeholder="Your Country" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Work Email*</label>
            <input required type="email" placeholder="email@company.com" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">WhatsApp Number*</label>
            <input required type="text" placeholder="+1 234 567 890" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Upload Part Photo (Optional)</label>
            <div className="relative">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              />
              <div className="w-full px-4 py-2 border rounded-lg flex items-center gap-2 text-gray-500 bg-gray-50">
                <UploadCloud size={18} />
                <span className="truncate">{fileName || "Click to upload sample photo"}</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Accepts JPG, PNG for precise compatibility matching.</p>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Message / Requirements</label>
            <textarea rows={2} placeholder="OEM customization, packaging requirements, etc." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-bold text-xl py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2">
            <SendHorizontal size={24} /> Get Wholesale Catalog & Price
          </button>
          <p className="text-center text-xs text-gray-400 mt-4 italic">
            * 100% Quality Guaranteed | Raw Material Traceability Included
          </p>
        </div>
      </form>

      <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 text-white flex flex-col justify-center text-center">
        <h4 className="text-2xl font-bold mb-4">Urgent Inquiry?</h4>
        <p className="mb-8 text-blue-100">Click below to chat with our product specialists directly on WhatsApp. Response time ≤ 1 hour.</p>
        <a 
          href={SITE_INFO.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105"
        >
          <MessageSquare size={30} /> Chat on WhatsApp
        </a>
        <div className="mt-8 pt-8 border-t border-white/10 text-sm">
          <p className="text-blue-200">Guangzhou I-Pack Auto Parts Co., Limited</p>
          <p className="font-mono mt-2 text-primary font-bold">{SITE_INFO.contact.whatsapp}</p>
        </div>
      </div>
    </div>
  );
}

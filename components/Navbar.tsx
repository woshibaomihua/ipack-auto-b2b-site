import Link from "next/link";
import { SITE_INFO } from "@/lib/constants";
import { MessageSquare } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">I-PACK</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">Auto Parts</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#models" className="text-gray-700 hover:text-primary font-medium">Models</Link>
          <Link href="#products" className="text-gray-700 hover:text-primary font-medium">Products</Link>
          <Link href="#about" className="text-gray-700 hover:text-primary font-medium">About</Link>
          <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
          <a 
            href={SITE_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-[#25D366] font-bold hover:text-[#128C7E] transition-colors"
          >
            <MessageSquare size={18} />
            Chat Now
          </a>
          <Link href="#rfq" className="btn-primary py-2 px-6 rounded shadow-md">Get a Quote</Link>
        </div>
      </div>
    </nav>
  );
}

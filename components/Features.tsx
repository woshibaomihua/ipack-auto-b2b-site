import { TRUST_POINTS } from "@/lib/constants";
import { CircleCheck, Clock, Factory, Star, TrendingUp, Truck } from "lucide-react";

const icons = [CircleCheck, Star, Factory, TrendingUp, Clock, Truck];

export function Features() {
  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_POINTS.map((point, index) => {
            const Icon = icons[index];
            return (
              <div key={point.label} className="text-center group">
                <div className="w-12 h-12 bg-red-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{point.value}</h3>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">{point.label}</p>
                <p className="text-xs text-gray-400">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

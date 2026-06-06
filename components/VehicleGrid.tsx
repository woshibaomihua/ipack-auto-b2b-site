import { VEHICLE_MODELS } from "@/lib/constants";

export function VehicleGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {VEHICLE_MODELS.map((model) => (
        <div key={model.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group">
          <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 font-bold group-hover:bg-primary/5 transition-colors">
            {model.name} Image
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{model.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{model.series} Series</p>
          <a href="#rfq" className="text-sm font-semibold text-secondary hover:underline">Request Parts →</a>
        </div>
      ))}
    </div>
  );
}

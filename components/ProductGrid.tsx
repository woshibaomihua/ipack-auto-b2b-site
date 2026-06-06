import { CATEGORIES } from "@/lib/constants";

export function ProductGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {CATEGORIES.map((cat) => (
        <div key={cat.name} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
            {cat.name}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">{cat.name}</h3>
            <ul className="space-y-2">
              {cat.items.map(item => (
                <li key={item} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#rfq" className="mt-6 block text-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors">
              Get Catalog
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

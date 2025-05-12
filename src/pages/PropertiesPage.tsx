import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropertyCard from '../components/common/PropertyCard';
import { properties } from '../data/properties';
import { Filter, X, Check } from 'lucide-react';

interface FilterOptions {
  type: string | null;
  location: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  features: string[];
}

const locations = ['Lagos', 'Abuja', 'Port Harcourt', 'Enugu'];
const propertyTypes = ['Land', 'House', 'Apartment', 'Commercial'];
const features = [
  { id: 'certificate', name: 'Certificate of Occupancy', icon: Check },
  { id: 'water', name: 'Constant Water Supply', icon: Check },
  { id: 'electricity', name: 'Electricity', icon: Check },
  { id: 'eco', name: 'Eco-friendly', icon: Check },
];

const PropertiesPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [filters, setFilters] = useState<FilterOptions>({
    type: null,
    location: null,
    minPrice: null,
    maxPrice: null,
    features: [],
  });
  
  // Parse query parameters and set initial filters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    const initialFilters: FilterOptions = {
      type: params.get('type'),
      location: params.get('location'),
      minPrice: params.get('minPrice') ? Number(params.get('minPrice')) : null,
      maxPrice: params.get('maxPrice') ? Number(params.get('maxPrice')) : null,
      features: params.get('features') ? params.get('features')!.split(',') : [],
    };
    
    setFilters(initialFilters);
  }, [location.search]);
  
  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };
  
  const toggleFeature = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    
    setFilters({
      ...filters,
      features: newFeatures,
    });
  };
  
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (filters.type) params.set('type', filters.type);
    if (filters.location) params.set('location', filters.location);
    if (filters.minPrice) params.set('minPrice', filters.minPrice.toString());
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice.toString());
    if (filters.features.length > 0) params.set('features', filters.features.join(','));
    
    navigate({ search: params.toString() });
    setIsFilterOpen(false);
  };
  
  const resetFilters = () => {
    setFilters({
      type: null,
      location: null,
      minPrice: null,
      maxPrice: null,
      features: [],
    });
    
    navigate({ search: '' });
    setIsFilterOpen(false);
  };
  
  // Filter properties based on filters
  const filteredProperties = properties.filter(property => {
    if (filters.type && property.type.toLowerCase() !== filters.type.toLowerCase()) {
      return false;
    }
    
    if (filters.location && property.location !== filters.location) {
      return false;
    }
    
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.features.length > 0) {
      // Check if property has all selected features
      return filters.features.every(feature => 
        property.features && property.features.includes(feature)
      );
    }
    
    return true;
  });
  
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-black py-12 mb-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Property Listings
          </h1>
          <p className="text-gray-300 mt-2">
            Find your perfect property from our exclusive listings
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-16">
        {/* Filter Controls */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="font-semibold">
              {filteredProperties.length} Properties Found
            </h2>
          </div>
          
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center bg-black text-white px-4 py-2 rounded hover:bg-[#D4AF37] transition-colors"
          >
            <Filter size={18} className="mr-2" />
            Filter Properties
          </button>
        </div>
        
        {/* Filter Sidebar (Mobile Overlay) */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filter Properties</h3>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 hover:text-black"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Property Type Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Property Type</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {propertyTypes.map(type => (
                      <button
                        key={type}
                        className={`py-2 px-3 border rounded transition-colors ${
                          filters.type === type.toLowerCase()
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                            : 'border-gray-300 hover:border-[#D4AF37]'
                        }`}
                        onClick={() => handleFilterChange('type', filters.type === type.toLowerCase() ? null : type.toLowerCase())}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Location Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Location</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map(loc => (
                      <button
                        key={loc}
                        className={`py-2 px-3 border rounded transition-colors ${
                          filters.location === loc
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                            : 'border-gray-300 hover:border-[#D4AF37]'
                        }`}
                        onClick={() => handleFilterChange('location', filters.location === loc ? null : loc)}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Price Range (₦)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="minPrice" className="block text-sm text-gray-600 mb-1">
                        Min Price
                      </label>
                      <input
                        type="number"
                        id="minPrice"
                        value={filters.minPrice || ''}
                        onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : null)}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Min"
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPrice" className="block text-sm text-gray-600 mb-1">
                        Max Price
                      </label>
                      <input
                        type="number"
                        id="maxPrice"
                        value={filters.maxPrice || ''}
                        onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : null)}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Features Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Features</h4>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`flex items-center w-full py-2 px-3 border rounded transition-colors ${
                          filters.features.includes(feature.id)
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                            : 'border-gray-300 hover:border-[#D4AF37]'
                        }`}
                      >
                        <feature.icon size={18} className="mr-2" />
                        {feature.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Filter Action Buttons */}
                <div className="pt-4 space-y-3">
                  <button
                    onClick={applyFilters}
                    className="w-full bg-black text-white py-3 rounded font-medium hover:bg-[#D4AF37] transition-colors"
                  >
                    Apply Filters
                  </button>
                  
                  <button
                    onClick={resetFilters}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded font-medium hover:bg-gray-200 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to find properties that match your criteria.
            </p>
            <button
              onClick={resetFilters}
              className="bg-black text-white px-6 py-2 rounded hover:bg-[#D4AF37] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
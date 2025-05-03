
import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Search, ArrowDownUp } from 'lucide-react';
import { usePropertiesStore } from '../../store/propertiesStore';
import { toast } from "@/components/ui/use-toast";

const FeaturedPropertiesManager = () => {
  const { properties, toggleFeatured } = usePropertiesStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Filter properties based on search query and featured filter
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFeatured = showFeaturedOnly ? property.featured : true;
    return matchesSearch && matchesFeatured;
  });

  const handleToggleFeatured = (propertyId: string, isFeatured: boolean) => {
    toggleFeatured(propertyId);
    
    toast({
      title: isFeatured ? "Removed from Featured" : "Added to Featured",
      description: isFeatured 
        ? "The property has been removed from the featured section." 
        : "The property has been added to the featured section.",
    });
  };

  // Count featured properties
  const featuredCount = properties.filter(p => p.featured).length;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-semibold text-estate-navy mb-4">Featured Properties Settings</h2>
        <p className="text-estate-gray mb-6">
          Toggle properties to show in the featured section of the homepage. 
          Currently featuring {featuredCount} properties.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search properties..."
              className="pl-10 w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <label htmlFor="featured-only" className="text-sm font-medium text-estate-darkgray">
              Show featured only
            </label>
            <Switch
              id="featured-only"
              checked={showFeaturedOnly}
              onCheckedChange={setShowFeaturedOnly}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Featured</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{property.title}</div>
                      <div className="text-sm text-gray-500">{property.location}</div>
                    </div>
                  </TableCell>
                  <TableCell>${property.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      property.status === 'for-sale' ? 'bg-green-100 text-green-800' : 
                      property.status === 'for-rent' ? 'bg-blue-100 text-blue-800' : 
                      property.status === 'sold' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {property.status.replace(/-/g, ' ')}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch
                      checked={property.featured}
                      onCheckedChange={() => handleToggleFeatured(property.id, property.featured)}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                  No properties found. Try a different search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FeaturedPropertiesManager;

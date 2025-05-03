
import { useState } from 'react';
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Plus, Edit, Trash2, Eye, Search, ArrowUp, ArrowDown
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Property } from '../../types/property';
import PropertyForm from './PropertyForm';
import { usePropertiesStore } from '../../store/propertiesStore';

const PropertyList = () => {
  const { properties, deleteProperty } = usePropertiesStore();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<keyof Property>('title');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Filter properties based on search query
  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  const handleSort = (field: keyof Property) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleEdit = (property: Property) => {
    setCurrentProperty(property);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (propertyId: string) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      deleteProperty(propertyId);
      toast({
        title: "Property Deleted",
        description: "The property has been successfully deleted.",
      });
    }
  };

  const handleCreateNew = () => {
    setIsCreateDialogOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search properties..."
            className="pl-10 w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleCreateNew} className="bg-estate-gold hover:bg-estate-gold/90">
          <Plus size={18} className="mr-2" /> Add New Property
        </Button>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('title')}
              >
                Title
                {sortField === 'title' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="inline ml-1" /> : <ArrowDown size={14} className="inline ml-1" />
                )}
              </TableHead>
              <TableHead 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('price')}
              >
                Price
                {sortField === 'price' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="inline ml-1" /> : <ArrowDown size={14} className="inline ml-1" />
                )}
              </TableHead>
              <TableHead>Location</TableHead>
              <TableHead 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('status')}
              >
                Status
                {sortField === 'status' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="inline ml-1" /> : <ArrowDown size={14} className="inline ml-1" />
                )}
              </TableHead>
              <TableHead 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('featured')}
              >
                Featured
                {sortField === 'featured' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="inline ml-1" /> : <ArrowDown size={14} className="inline ml-1" />
                )}
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProperties.length > 0 ? (
              sortedProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-medium">{property.id}</TableCell>
                  <TableCell>{property.title}</TableCell>
                  <TableCell>${property.price.toLocaleString()}</TableCell>
                  <TableCell>{property.location}</TableCell>
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
                  <TableCell>
                    {property.featured ? (
                      <span className="inline-flex h-6 items-center justify-center rounded-full bg-estate-gold/20 px-2.5 text-xs font-medium text-estate-gold">
                        Featured
                      </span>
                    ) : (
                      <span className="inline-flex h-6 items-center justify-center rounded-full bg-gray-100 px-2.5 text-xs font-medium text-gray-600">
                        No
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`/property/${property.id}`, '_blank')}
                      >
                        <Eye size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(property)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(property.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  No properties found. Try a different search or add a new property.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create Property Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Property</DialogTitle>
          </DialogHeader>
          <PropertyForm 
            onSuccess={() => setIsCreateDialogOpen(false)} 
          />
        </DialogContent>
      </Dialog>

      {/* Edit Property Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Property</DialogTitle>
          </DialogHeader>
          {currentProperty && (
            <PropertyForm 
              property={currentProperty} 
              onSuccess={() => setIsEditDialogOpen(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyList;

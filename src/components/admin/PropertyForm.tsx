
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Property } from '../../types/property';
import { usePropertiesStore } from '../../store/propertiesStore';
import { toast } from "@/components/ui/use-toast";

// Form schema using Zod for validation
const propertyFormSchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  price: z.coerce.number().positive({ message: "Price must be a positive number" }),
  pricePerSqFt: z.coerce.number().positive().optional(),
  location: z.string().min(2, { message: "Location is required" }),
  address: z.string().min(2, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z.string().min(5, { message: "Valid zip code is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  bedrooms: z.coerce.number().int().positive({ message: "Number of bedrooms is required" }),
  bathrooms: z.coerce.number().positive({ message: "Number of bathrooms is required" }),
  size: z.coerce.number().int().positive({ message: "Size is required" }),
  lotSize: z.coerce.number().int().optional(),
  yearBuilt: z.coerce.number().int().positive({ message: "Year built is required" }),
  propertyType: z.enum(['apartment', 'house', 'villa', 'penthouse', 'commercial']),
  status: z.enum(['for-sale', 'for-rent', 'sold', 'pending']),
  featured: z.boolean().default(false),
  amenities: z.string().array().min(1, { message: "At least one amenity is required" }),
  images: z.string().array().min(1, { message: "At least one image URL is required" }),
  virtualTour: z.string().url().optional().or(z.literal('')),
  video: z.string().url().optional().or(z.literal('')),
  agent: z.object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    photo: z.string().url()
  })
});

type PropertyFormData = z.infer<typeof propertyFormSchema>;

interface PropertyFormProps {
  property?: Property;
  onSuccess: () => void;
}

const PropertyForm = ({ property, onSuccess }: PropertyFormProps) => {
  const { addProperty, updateProperty } = usePropertiesStore();
  const [amenitiesInput, setAmenitiesInput] = useState('');
  const [imagesInput, setImagesInput] = useState('');
  
  // Initialize the form with existing property data or default values
  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: property ? {
      ...property
    } : {
      id: `prop-${(Math.floor(Math.random() * 900) + 100).toString()}`,
      title: '',
      description: '',
      price: 0,
      pricePerSqFt: 0,
      location: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'USA',
      bedrooms: 0,
      bathrooms: 0,
      size: 0,
      lotSize: 0,
      yearBuilt: new Date().getFullYear(),
      propertyType: 'house',
      status: 'for-sale',
      featured: false,
      amenities: [],
      images: [],
      virtualTour: '',
      video: '',
      agent: {
        id: 'agent-001',
        name: 'Sophia Rodriguez',
        phone: '(305) 555-7890',
        email: 'sophia@estateelegance.com',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
      }
    }
  });

  const handleAddAmenity = () => {
    if (amenitiesInput.trim()) {
      const currentAmenities = form.getValues('amenities') || [];
      form.setValue('amenities', [...currentAmenities, amenitiesInput.trim()]);
      setAmenitiesInput('');
    }
  };

  const handleRemoveAmenity = (index: number) => {
    const currentAmenities = form.getValues('amenities') || [];
    form.setValue('amenities', currentAmenities.filter((_, i) => i !== index));
  };

  const handleAddImage = () => {
    if (imagesInput.trim()) {
      const currentImages = form.getValues('images') || [];
      form.setValue('images', [...currentImages, imagesInput.trim()]);
      setImagesInput('');
    }
  };

  const handleRemoveImage = (index: number) => {
    const currentImages = form.getValues('images') || [];
    form.setValue('images', currentImages.filter((_, i) => i !== index));
  };

  const onSubmit = (data: PropertyFormData) => {
    try {
      // Ensure all required fields are present and properly typed
      const propertyData: Property = {
        id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
        pricePerSqFt: data.pricePerSqFt ?? 0,
        location: data.location,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        country: data.country,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        size: data.size,
        lotSize: data.lotSize ?? 0,
        yearBuilt: data.yearBuilt,
        propertyType: data.propertyType,
        status: data.status,
        featured: data.featured,
        amenities: data.amenities,
        images: data.images,
        virtualTour: data.virtualTour || undefined,
        video: data.video || undefined,
        agent: {
          id: data.agent.id,
          name: data.agent.name,
          phone: data.agent.phone,
          email: data.agent.email,
          photo: data.agent.photo
        },
        createdAt: property?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (property) {
        updateProperty(propertyData);
        toast({
          title: "Property Updated",
          description: "The property has been successfully updated.",
        });
      } else {
        addProperty(propertyData);
        toast({
          title: "Property Created",
          description: "The new property has been successfully created.",
        });
      }
      
      onSuccess();
    } catch (error) {
      console.error("Error saving property:", error);
      toast({
        title: "Error",
        description: "There was an error saving the property.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter property title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter property description" 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pricePerSqFt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price per sq ft</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Price per sq ft" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location *</FormLabel>
                  <FormControl>
                    <Input placeholder="City, State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="Street address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State *</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code *</FormLabel>
                    <FormControl>
                      <Input placeholder="Zip Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country *</FormLabel>
                    <FormControl>
                      <Input placeholder="Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Bedrooms" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Bathrooms" {...field} step="0.5" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearBuilt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year Built *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Year Built" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size (sq ft) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Size" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lotSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lot Size (sq ft)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Lot Size" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="for-sale">For Sale</SelectItem>
                        <SelectItem value="for-rent">For Rent</SelectItem>
                        <SelectItem value="sold">Sold</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Featured Property</FormLabel>
                    <p className="text-sm text-gray-500">
                      Display this property in the featured section on the homepage
                    </p>
                  </div>
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Amenities *</FormLabel>
              <div className="flex space-x-2 mb-2">
                <Input
                  placeholder="Add amenity"
                  value={amenitiesInput}
                  onChange={(e) => setAmenitiesInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddAmenity();
                    }
                  }}
                />
                <Button type="button" onClick={handleAddAmenity}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {form.watch('amenities')?.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-sm">{amenity}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveAmenity(index)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {form.formState.errors.amenities && (
                <p className="text-sm font-medium text-destructive mt-1">
                  {form.formState.errors.amenities.message}
                </p>
              )}
            </div>

            <div>
              <FormLabel>Images *</FormLabel>
              <div className="flex space-x-2 mb-2">
                <Input
                  placeholder="Add image URL"
                  value={imagesInput}
                  onChange={(e) => setImagesInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddImage();
                    }
                  }}
                />
                <Button type="button" onClick={handleAddImage}>Add</Button>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {form.watch('images')?.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Property ${index + 1}`}
                      className="w-full h-20 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {form.formState.errors.images && (
                <p className="text-sm font-medium text-destructive mt-1">
                  {form.formState.errors.images.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="virtualTour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Virtual Tour URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Virtual tour URL (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="video"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Video URL (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4 border-t">
          <Button type="button" variant="outline" onClick={onSuccess}>
            Cancel
          </Button>
          <Button type="submit">
            {property ? 'Update Property' : 'Create Property'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PropertyForm;

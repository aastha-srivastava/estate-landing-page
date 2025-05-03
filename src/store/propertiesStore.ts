
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Property } from '../types/property';
import { featuredProperties as initialProperties } from '../data/properties';

interface PropertiesState {
  properties: Property[];
  addProperty: (property: Property) => void;
  updateProperty: (property: Property) => void;
  deleteProperty: (id: string) => void;
  toggleFeatured: (id: string) => void;
}

export const usePropertiesStore = create<PropertiesState>()(
  persist(
    (set) => ({
      properties: initialProperties,
      
      addProperty: (property) => 
        set((state) => ({
          properties: [...state.properties, property]
        })),
      
      updateProperty: (updatedProperty) => 
        set((state) => ({
          properties: state.properties.map((property) => 
            property.id === updatedProperty.id ? updatedProperty : property
          )
        })),
      
      deleteProperty: (id) => 
        set((state) => ({
          properties: state.properties.filter((property) => property.id !== id)
        })),
      
      toggleFeatured: (id) => 
        set((state) => ({
          properties: state.properties.map((property) => 
            property.id === id 
              ? { ...property, featured: !property.featured } 
              : property
          )
        })),
    }),
    {
      name: 'properties-storage',
    }
  )
);

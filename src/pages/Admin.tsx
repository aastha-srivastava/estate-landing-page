
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from '../components/layout/Layout';
import PropertyList from '../components/admin/PropertyList';
import PropertyForm from '../components/admin/PropertyForm';
import FeaturedPropertiesManager from '../components/admin/FeaturedPropertiesManager';
import { toast } from '../components/ui/use-toast';

const Admin = () => {
  const [activeTab, setActiveTab] = useState("properties");
  const navigate = useNavigate();

  // Simple admin authentication check
  // In a real app, this would be handled by a proper auth system
  const [isAdmin, setIsAdmin] = useState(() => {
    const adminPassword = localStorage.getItem('adminPassword');
    return adminPassword === 'admin123'; // Very simple example - not secure!
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    
    if (password === 'admin123') {
      localStorage.setItem('adminPassword', password);
      setIsAdmin(true);
      toast({
        title: "Admin Login Successful",
        description: "You now have access to the admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminPassword');
    setIsAdmin(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out of the admin panel",
    });
  };

  if (!isAdmin) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-estate-navy mb-6">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-estate-darkgray mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                  placeholder="Enter admin password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-estate-navy text-white py-3 px-4 rounded hover:bg-opacity-90 transition-all"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-500">
              <p>For demo purposes, the password is: admin123</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-estate-navy font-serif">Admin Panel</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-estate-navy text-estate-navy rounded hover:bg-estate-navy hover:text-white transition-colors"
            >
              View Website
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="properties">Manage Properties</TabsTrigger>
            <TabsTrigger value="featured">Featured Properties</TabsTrigger>
          </TabsList>
          
          <TabsContent value="properties" className="mt-6">
            <PropertyList />
          </TabsContent>
          
          <TabsContent value="featured" className="mt-6">
            <FeaturedPropertiesManager />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;

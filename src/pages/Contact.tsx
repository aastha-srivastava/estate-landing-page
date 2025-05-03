
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. Our team will contact you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const officeLocations = [
    {
      city: "New York",
      address: "123 Fifth Avenue, Suite 300, New York, NY 10010",
      phone: "+1 (212) 555-6789",
      email: "newyork@estateelegance.com",
      hours: "Mon - Fri: 9am - 6pm, Sat: 10am - 4pm"
    },
    {
      city: "Los Angeles",
      address: "456 Wilshire Blvd, Los Angeles, CA 90024",
      phone: "+1 (310) 555-7890",
      email: "losangeles@estateelegance.com",
      hours: "Mon - Fri: 9am - 6pm, Sat: 10am - 4pm"
    },
    {
      city: "Miami",
      address: "789 Ocean Drive, Miami, FL 33139",
      phone: "+1 (305) 555-1234",
      email: "miami@estateelegance.com",
      hours: "Mon - Fri: 9am - 6pm, Sat: 10am - 4pm"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-estate-navy flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team of luxury real estate experts
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-estate-gray mb-8 text-lg">
                Whether you're looking to buy, sell, or simply have questions about luxury real estate, 
                our team is here to help. Reach out to us using the form or contact information below.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-estate-navy text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-estate-navy mb-1">Main Office</h3>
                    <p className="text-estate-gray">123 Fifth Avenue, Suite 300, New York, NY 10010</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-estate-navy text-white p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-estate-navy mb-1">Phone</h3>
                    <p className="text-estate-gray">+1 (212) 555-6789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-estate-navy text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-estate-navy mb-1">Email</h3>
                    <p className="text-estate-gray">info@estateelegance.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-estate-navy text-white p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-estate-navy mb-1">Business Hours</h3>
                    <p className="text-estate-gray">Monday - Friday: 9am - 6pm</p>
                    <p className="text-estate-gray">Saturday: 10am - 4pm</p>
                    <p className="text-estate-gray">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-estate-navy mb-4">Schedule a Consultation</h3>
                <p className="text-estate-gray mb-4">
                  For personalized assistance, schedule a one-on-one consultation with one of our luxury property experts.
                </p>
                <button 
                  className="bg-estate-navy text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all flex items-center"
                >
                  <Phone size={18} className="mr-2" />
                  <span>Schedule Now</span>
                </button>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-estate-navy mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-estate-darkgray mb-1">
                        Full Name*
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-estate-darkgray mb-1">
                        Email Address*
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-estate-darkgray mb-1">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-estate-darkgray mb-1">
                        Subject*
                      </label>
                      <select 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Property Search">Property Search</option>
                        <option value="Selling a Property">Selling a Property</option>
                        <option value="Schedule a Viewing">Schedule a Viewing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-estate-darkgray mb-1">
                      Message*
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6} 
                      className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-estate-navy text-white py-3 px-4 rounded hover:bg-opacity-90 transition-all flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Office Locations */}
      <div className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Office Locations</h2>
            <p className="text-estate-gray max-w-3xl mx-auto text-lg">
              Visit one of our offices to meet with our luxury real estate specialists in person
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-estate-navy mb-4">{office.city}</h3>
                
                <div className="space-y-4 text-estate-gray">
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-estate-gold mt-1" />
                    <span>{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-estate-gold" />
                    <span>{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-estate-gold" />
                    <span>{office.email}</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock size={18} className="text-estate-gold mt-1" />
                    <span>{office.hours}</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full border border-estate-navy text-estate-navy py-2 px-4 rounded hover:bg-estate-navy hover:text-white transition-all">
                  View on Map
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="h-[400px] bg-gray-200">
        {/* This would be a map component in a real application */}
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src="https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=1200x400&maptype=roadmap&key=YOUR_API_KEY" 
            alt="Office location map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

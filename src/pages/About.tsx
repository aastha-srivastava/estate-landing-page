
import Layout from '../components/layout/Layout';
import { CheckCircle2, Award, Users, Home, Building, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, providing exceptional service and results."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Our clients' needs and goals are our top priority, and we work tirelessly to exceed expectations."
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We conduct business with the highest standards of professionalism, honesty, and transparency."
    },
    {
      icon: Building,
      title: "Expertise",
      description: "Our team brings deep market knowledge, industry expertise, and local insights to every transaction."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-estate-navy flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1996&auto=format&fit=crop" 
            alt="Luxury home" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">About Estate Elegance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A premier luxury real estate company dedicated to exceptional properties and discerning clients
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-estate-gray mb-6 text-lg">
                Founded in 2005, Estate Elegance has established itself as a leader in the luxury real estate market. 
                We began with a vision to transform the real estate experience for discerning clients seeking exceptional 
                properties that reflect their lifestyle and aspirations.
              </p>
              <p className="text-estate-gray mb-6 text-lg">
                Over the years, we've built a reputation for our personalized approach, curated property portfolio, 
                and unparalleled market expertise. Our team of experienced professionals is passionate about connecting 
                clients with their ideal properties and providing comprehensive support throughout the entire process.
              </p>
              <p className="text-estate-gray mb-8 text-lg">
                Today, Estate Elegance continues to expand its reach while maintaining the boutique, client-focused 
                approach that has been our hallmark since the beginning. We remain committed to excellence, integrity, 
                and creating exceptional real estate experiences for our clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-estate-gold text-4xl font-bold mb-2">500+</div>
                  <div className="text-estate-gray">Properties Sold</div>
                </div>
                <div>
                  <div className="text-estate-gold text-4xl font-bold mb-2">$2B+</div>
                  <div className="text-estate-gray">in Sales Volume</div>
                </div>
                <div>
                  <div className="text-estate-gold text-4xl font-bold mb-2">25+</div>
                  <div className="text-estate-gray">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588144215068-c20043c4e0e1?q=80&w=2070&auto=format&fit=crop"
                alt="Elegant interior" 
                className="rounded-lg shadow-xl w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury home" 
                className="rounded-lg shadow-xl w-2/3 absolute -bottom-12 -right-12 border-8 border-white hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="text-estate-gray max-w-3xl mx-auto text-lg">
              At Estate Elegance, our core values guide everything we do and shape how we serve our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center shadow-sm">
                <div className="mb-6 inline-block p-4 bg-estate-navy text-white rounded-lg">
                  <value.icon size={30} />
                </div>
                <h3 className="text-xl font-bold text-estate-navy mb-4">{value.title}</h3>
                <p className="text-estate-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-estate-gray max-w-3xl mx-auto text-lg">
              Meet the experienced professionals who lead Estate Elegance and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Jonathan Reynolds" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-estate-navy mb-1">Jonathan Reynolds</h3>
                <p className="text-estate-gold mb-4">Founder & CEO</p>
                <p className="text-estate-gray mb-4">
                  With over 25 years in luxury real estate, Jonathan founded Estate Elegance with a vision to transform the industry by providing exceptional service and expertise.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                alt="Alexandra Chen" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-estate-navy mb-1">Alexandra Chen</h3>
                <p className="text-estate-gold mb-4">Chief Operating Officer</p>
                <p className="text-estate-gray mb-4">
                  Alexandra oversees operations and strategic initiatives, ensuring that Estate Elegance delivers unparalleled service and results for our clients.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Marcus Williams" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-estate-navy mb-1">Marcus Williams</h3>
                <p className="text-estate-gold mb-4">Director of Sales</p>
                <p className="text-estate-gray mb-4">
                  Marcus leads our team of luxury property specialists, bringing extensive experience and market knowledge to Estate Elegance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/agents" className="btn-primary">
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-20 bg-estate-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Why Choose Estate Elegance?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We offer a distinctive approach to luxury real estate, setting us apart in the industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-estate-gold mt-1">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Curated Property Portfolio</h3>
                <p className="text-gray-300">
                  We carefully select each property in our portfolio, focusing on exceptional quality, prime locations, and distinctive features that set them apart.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-estate-gold mt-1">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
                <p className="text-gray-300">
                  We provide tailored guidance and support throughout your real estate journey, understanding that each client's needs and goals are unique.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-estate-gold mt-1">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Market Expertise</h3>
                <p className="text-gray-300">
                  Our team brings deep knowledge of luxury real estate markets, providing valuable insights and guidance for informed decision-making.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-estate-gold mt-1">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Global Network</h3>
                <p className="text-gray-300">
                  We maintain connections with luxury property markets worldwide, offering clients access to exceptional opportunities both locally and internationally.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-estate-gold mt-1">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Support</h3>
                <p className="text-gray-300">
                  From initial consultation to closing and beyond, we provide comprehensive support and resources at every step of your property transaction.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-estate-gold mt-1">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovative Marketing</h3>
                <p className="text-gray-300">
                  We utilize cutting-edge marketing strategies and technology to showcase properties effectively and reach targeted audiences of qualified buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

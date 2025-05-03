
import React from 'react';
import { singleAgent } from '../../types/agent';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface AgentProfileProps {
  variant?: 'full' | 'compact';
}

const AgentProfile = ({ variant = 'full' }: AgentProfileProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={singleAgent.photo} 
          alt={singleAgent.name} 
          className="w-full h-96 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <div className="flex space-x-3 mb-4">
            {singleAgent.socialMedia?.facebook && (
              <a href={singleAgent.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-estate-gold transition-colors">
                <Facebook size={18} />
              </a>
            )}
            {singleAgent.socialMedia?.twitter && (
              <a href={singleAgent.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-estate-gold transition-colors">
                <Twitter size={18} />
              </a>
            )}
            {singleAgent.socialMedia?.instagram && (
              <a href={singleAgent.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-estate-gold transition-colors">
                <Instagram size={18} />
              </a>
            )}
            {singleAgent.socialMedia?.linkedin && (
              <a href={singleAgent.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-estate-gold transition-colors">
                <Linkedin size={18} />
              </a>
            )}
          </div>
          <div className="text-white">
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              <span>{singleAgent.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>{singleAgent.email}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-estate-navy mb-1">{singleAgent.name}</h3>
        <p className="text-estate-gray mb-4">{singleAgent.position}</p>
        
        {variant === 'full' && (
          <>
            <p className="text-estate-darkgray mb-6">{singleAgent.bio}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center border-r border-gray-100">
                <div className="text-estate-navy font-bold text-xl">{singleAgent.experience}</div>
                <div className="text-estate-gray text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-estate-navy font-bold text-xl">{singleAgent.specialties.length}</div>
                <div className="text-estate-gray text-sm">Specialties</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-estate-navy">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {singleAgent.specialties.map((specialty, index) => (
                  <span key={index} className="bg-gray-100 text-estate-darkgray px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-estate-navy">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {singleAgent.languages.map((language, index) => (
                  <span key={index} className="bg-gray-100 text-estate-darkgray px-3 py-1 rounded-full text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;

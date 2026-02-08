import React from 'react';
import { Mail, Phone, MapPin,  Instagram, Youtube, Facebook } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { CONTACT_INFO, SOCIAL_MEDIA, WHATSAPP_LINK } from '../constants';
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
interface ContactProps {
  onEnrollClick: () => void;
}

export function Contact({ onEnrollClick }: ContactProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-100">
            We'd love to hear from you. Contact us anytime!
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <MapPin size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-600 mb-3">Location</h3>
              <p className="text-gray-700">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <FaWhatsapp size={32} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-accent-600 mb-3">WhatsApp</h3>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-accent-600 font-semibold transition-colors"
              >
                +91 {CONTACT_INFO.whatsapp}
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Mail size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-600 mb-3">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-700 hover:text-primary-600 font-semibold transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-lg text-gray-100 mb-8">
              Follow us on social media for updates, tips, and announcements
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg transition-all duration-300"
                  title={social.name}
                >
                  {social.name === 'Instagram' && <Instagram size={20} />}
                  {social.name === 'YouTube' && <Youtube size={20} />}
                  {social.name === 'Facebook' && <Facebook size={20} />}
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
            <Button
              variant="secondary"
              size="lg"
              onClick={onEnrollClick}
            >
              Start Your Journey
            </Button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-primary-600 mb-6">Location Map</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4090.0978326391632!2d88.46964787236732!3d22.726157686770875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899116f725df5%3A0x6b49ee59d1221ec8!2sA2%20Smart%20Classes!5e1!3m2!1sen!2sin!4v1770577628294!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4090.0978326391632!2d88.46964787236732!3d22.726157686770875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899116f725df5%3A0x6b49ee59d1221ec8!2sA2%20Smart%20Classes!5e1!3m2!1sen!2sin!4v1770577628294!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}

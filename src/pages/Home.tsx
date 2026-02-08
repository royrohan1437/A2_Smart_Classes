import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Eye,
  Video,
  FileText,
  Shield,
  Star,
  Users,
  Trophy,
  Zap,
} from 'lucide-react';
import { Button } from '../components/shared/Button';
import { FEATURES, WHATSAPP_LINK } from '../constants';

interface HomeProps {
  onEnrollClick: () => void;
}

const featureIcons: Record<string, React.ReactNode> = {
  'Smart Classrooms': <BookOpen size={32} className="text-accent-500" />,
  'Visual Learning': <Eye size={32} className="text-accent-500" />,
  'Class Recordings': <Video size={32} className="text-accent-500" />,
  'Printed Board Work': <FileText size={32} className="text-accent-500" />,
  'Highly Secure': <Shield size={32} className="text-accent-500" />,
};

const classFeatures = [
  { icon: <BookOpen size={24} />, label: 'CBSE / ICSE / WBSE' },
  { icon: <Users size={24} />, label: 'Class I – IV' },
  { icon: <Trophy size={24} />, label: 'Class V – XII' },
  { icon: <Star size={24} />, label: 'Arts, Commerce, Science' },
  { icon: <Video size={24} />, label: 'Monthly Mock Tests' },
  { icon: <Users size={24} />, label: 'Skilled Teachers' },
  { icon: <MessageCircle size={24} />, label: 'Doubt Sessions' },
  { icon: <Zap size={24} />, label: 'Extra Activities' },
  { icon: <Trophy size={24} />, label: '100% Success' },
];

function MessageCircle(props: any) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
}

export function Home({ onEnrollClick }: HomeProps) {
  const navigate = useNavigate();

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Smart Learning for a Smarter Future
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Technology-enabled education with expert guidance, personalized learning, and proven success.
            Join A2 Smart Classes and unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('popular-classes')}
            >
              Explore Classes
            </Button>
            <Button
              variant="accent"
              size="lg"
              onClick={onEnrollClick}
            >
              Contact to Enroll
            </Button>
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary-600 mb-4">
            Why Choose A2 Smart Classes?
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We provide comprehensive, student-centric education with state-of-the-art facilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
              >
                <div className="mb-4">
                  {featureIcons[feature.title] || <BookOpen size={32} className="text-accent-500" />}
                </div>
                <h3 className="text-lg font-bold text-primary-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="popular-classes" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary-600 mb-4">
            Popular Classes
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive courses for all academic levels and competitive exams
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {classFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200 hover:border-accent-500 hover:shadow-lg transition-all duration-300 ease-out"
              >
                <div className="flex items-center gap-4">
                  <div className="text-accent-500">{feature.icon}</div>
                  <p className="font-semibold text-gray-800">{feature.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/classes')}
            >
              Explore All Classes
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-lg text-gray-100 mb-10">
            Start your journey with A2 Smart Classes today and achieve academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={onEnrollClick}
            >
              Enroll Now
            </Button>
            <Button
              variant="accent"
              size="lg"
              onClick={() =>
                window.open(WHATSAPP_LINK, '_blank')
              }
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

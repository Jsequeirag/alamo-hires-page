import React, { useState, useEffect, useRef } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import RequirementsSection from '../components/RequirementsSection';
import ApplicationForm from '../components/ApplicationForm';
import Footer from '../components/Footer';

const AlamoJobs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [visibleElements, setVisibleElements] = useState(new Set<string>());
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      
      // Header shrink effect
      setIsHeaderShrunk(scrollTop > 100);
      
      // Active section tracking
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations - Fixed to run after loading
  useEffect(() => {
    if (isLoading) return;
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      const hiddenElements = document.querySelectorAll('.animate-hidden');
      hiddenElements.forEach(el => {
        if (el.id) {
          observerRef.current?.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('¡Aplicación enviada exitosamente! Te contactaremos pronto.');
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        availability: '',
        motivation: ''
      });
    }, 2000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isHeaderShrunk={isHeaderShrunk}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <main className="pt-20">
        <HeroSection />
        <BenefitsSection visibleElements={visibleElements} />
        <RequirementsSection visibleElements={visibleElements} />
        <ApplicationForm 
          visibleElements={visibleElements}
          formData={formData}
          isSubmitting={isSubmitting}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AlamoJobs;
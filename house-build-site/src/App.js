import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Calendar, Phone, Mail, Home, X, ChevronLeft, ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const HouseProjectWebsite = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [questions, setQuestions] = useState([]);
  const [visitCount, setVisitCount] = useState(0);

const constructionImages = [
  { src: `${process.env.PUBLIC_URL}/images/rendering_front_side.png`, alt: 'Rendering of front and side of house', type: 'image' },
  { src: `${process.env.PUBLIC_URL}/images/rendering_rear.png`, alt: 'Rendering of rear w/ deck', type: 'image' },
  { src: `${process.env.PUBLIC_URL}/images/proposed_site_plan.png`, alt: 'Proposed site plan', type: 'image' },
  { src: `${process.env.PUBLIC_URL}/images/Overhead_239r_site_at_purchase.jpeg`, alt: 'Plot view from June 2024', type: 'image' }
];

// Add the PDF as a gallery item
const galleryItems = [
  ...constructionImages,
  {
    src: `${process.env.PUBLIC_URL}/pdfs/REFUSAL_LETTER-239R_BEECH_ST.pdf`,
    alt: 'Initial Refusal Letter (PDF)',
    type: 'pdf'
  }
];

const [selectedImage, setSelectedImage] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);


  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % constructionImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.question,
    timestamp: new Date().toLocaleDateString(),
    to_email: 'kelleysaulniers@gmail.com'
  };

  emailjs.send(
    'service_wxgaw8a',     // Service ID
    'template_qbfvby8',    // Template ID
    templateParams,
    'PvoFJ6qevHck-PArM'    // Public Key
  )
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    setFormData({ name: '', email: '', question: '' });
    alert('Thank you for your question! We\'ll get back to you soon.');
  })
  .catch((error) => {
    console.log('FAILED...', error);
    alert('Sorry, there was an error sending your question. Please try again, or email us separately at kelleysaulniers@gmail.com.');
  });
};

const openModal = (item, index) => {
  setSelectedImage(item);
  setCurrentIndex(index);
};

const closeModal = () => {
  setSelectedImage(null);
};

const goToPrevious = () => {
  const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
  setCurrentIndex(newIndex);
  setSelectedImage(galleryItems[newIndex]);
};

const goToNext = () => {
  const newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
  setCurrentIndex(newIndex);
  setSelectedImage(galleryItems[newIndex]);
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') goToPrevious();
  if (e.key === 'ArrowRight') goToNext();
};

  const milestones = [
    { date: 'April 2024', task: 'Decided to build passive home as \"forever home\"', status: 'completed' },
    { date: 'July 2024', task: 'Purchase 239 and 239R Beech St', status: 'completed'},
    { date: 'April 2025', task: 'Finalize architecture', status: 'completed'},
    { date: 'May 2025', task: 'Finalize proposed site plan', status: 'completed'},
    { date: 'June 12, 2025', task: 'Submit building permit', status: 'completed'},
    { date: 'June 2025', task: 'Permit review and initial denial', status: 'completed'},
    { date: 'July 2025', task: 'Submit zoning variance application', status: 'completed'},
    { date: 'August 2025 - Q4 2026', task: 'Zoning Board of Appeals review', status: 'in-progress'},
    { 
      date: 'September 10, 2025', 
      task: 'Abutter\'s meeting', 
      status: 'upcoming',
      hoverText: `Abutters meeting will be held virtually via Zoom. 
      Date: September 10, 2025, 7:00 PM.
      Join: https://us06web.zoom.us/j/87474519861?pwd=87474519861`
    },
    { date: 'Q1-Q2 2026', task: 'Foundation and site work', status: 'upcoming'},
    { date: 'Q3 2026', task: 'EkoBuilt kit delivery; exterior completed', status: 'upcoming'},
    { date: 'Q3-Q4 2026', task: 'Interior Work', status: 'upcoming'},
    { date: 'Q4 2026', task: 'Final Inspections', status: 'upcoming'},
    { date: 'Q4 2026', task: 'Move in', status: 'upcoming'}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">239R Beech St</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#timeline" className="text-gray-600 hover:text-blue-600 transition-colors">Timeline</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Questions</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img 
          src={constructionImages[currentImageIndex].src}
          alt={constructionImages[currentImageIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Building Our New Home</h2>
            <p className="text-xl md:text-2xl mb-6">239R Beech St • Roslindale, MA</p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Roslindale Neighborhood</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Expected Completion: Q4 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Our Project</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6">
                We're excited to share our journey of building a two story home with walkout basement in the Roslindale neighborhood. This energy-efficient home was designed for our young family. This website will be updated regularly – check back in the future!
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Energy-efficient design with passive house principles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Pre-fab walls for fast construction</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Access via Beech St</span>
                </div>
              <p>
                The house was designed by selecting an <a href="https://ekobuilt.com/" target="_blank" className="external-link">EkoBuilt</a> floor plan that matched the property's natural grading.
              </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Project Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Square Footage (with basement):</span>
                    <span className="font-medium">~2,600 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-medium">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-medium">3.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Parking:</span>
                    <span className="font-medium">2 off-street spots</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lot Size:</span>
                    <span className="font-medium">~7,000 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openModal(item, index)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 bg-gray-100">
                    <span className="text-6xl text-red-600">📄</span>
                    <span className="mt-2 text-gray-800 font-medium">{item.alt}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Potential Project Timeline</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-4 ${
                  milestone.status === 'completed' ? 'bg-green-500' :
                  milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                }`}></div>
                <div
                  className="flex-1 bg-white p-4 rounded-lg shadow"
                  {...(milestone.hoverText && { title: milestone.hoverText })}
                  style={milestone.hoverText ? { cursor: 'help' } : {}}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">{milestone.task}</h3>
                    <span className="text-sm text-gray-500">{milestone.date}</span>
                  </div>
                  <div className={`text-sm mt-1 ${
                    milestone.status === 'completed' ? 'text-green-600' :
                    milestone.status === 'in-progress' ? 'text-yellow-600' : 'text-gray-500'
                  }`}>
                    {milestone.status === 'completed' ? 'Completed' :
                     milestone.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                  </div>
                  {milestone.hoverText && (
                    <div className="mt-2 text-xs text-blue-700 bg-blue-50 rounded p-2 border border-blue-200">
                      {milestone.hoverText}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Form */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Have Questions?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Question</label>
                  <textarea
                    value={formData.question}
                    onChange={(e) => setFormData({...formData, question: e.target.value})}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Question
                </button>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">(617) 449-0684</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">kelleysaulniers@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">239R Beech St, Roslindale, MA</span>
                  </div>
                </div>
              </div>
              
              {questions.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Questions</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {questions.slice(0, 3).map((q) => (
                      <div key={q.id} className="border-b border-gray-200 pb-3">
                        <p className="text-sm text-gray-600 mb-1">From: {q.name}</p>
                        <p className="text-gray-800">{q.question}</p>
                        <p className="text-xs text-gray-500 mt-1">{q.timestamp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 The Kelley Saulniers. Built with love for our neighbors.</p>
          <p className="text-gray-400 text-sm">Thanks for following our journey!</p>
        </div>
      </footer>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-7xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.type === 'image' ? (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <iframe
                src={selectedImage.src}
                title={selectedImage.alt}
                className="w-[80vw] h-[80vh] bg-white rounded-lg"
              />
            )}

            {/* Image/PDF Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center max-w-2xl">
            <p className="text-lg font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseProjectWebsite;
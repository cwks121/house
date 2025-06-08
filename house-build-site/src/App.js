import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Calendar, MessageSquare, Phone, Mail, Home, Users, Wrench } from 'lucide-react';

const HouseProjectWebsite = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [questions, setQuestions] = useState([]);
  const [visitCount, setVisitCount] = useState(0);

  // Sample images - replace with your actual construction photos
  const constructionImages = [
    { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800', alt: 'Foundation work' },
    { src: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800', alt: 'Framing progress' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Interior work' }
    { src: '/house-build-site/public/images/rendering_front_side.png', alt: 'Rendering of front and side of house' },
    { src: '/house-build-site/public/images/rendering_rear.png', alt: 'Rendering of rear w/ deck' }
  ];

  // Analytics tracking
  useEffect(() => {
    setVisitCount(prev => prev + 1);
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % constructionImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toLocaleDateString()
    };
    setQuestions(prev => [newQuestion, ...prev]);
    setFormData({ name: '', email: '', question: '' });
    alert('Thank you for your question! We\'ll get back to you soon.');
  };

  const milestones = [
    { date: 'April 2024', task: 'Decided to build passive home as \"forever home\"', status: 'completed' },
    { date: 'July 2024', task: 'Purchase 239 and 239R Beech St', status: 'completed' },
    { date: 'April 2025', task: 'Finalize architecture', status: 'completed' },
    { date: 'May 2025', task: 'Finalize proposed site plan', status: 'completed' },
    { date: 'June 2025', task: 'Submit building permit', status: 'in-progress' },
    { date: 'Sept 2025 - Q2 2026', task: 'Zoning Board of Appeals approval', status: 'upcoming' },
    { date: 'Q2-Q3 2026', task: 'Foundation and site work', status: 'upcoming' },
    { date: 'Q3 2026', task: 'EkoBuilt kit delivery; exterior completed', status: 'upcoming' },
    { date: 'Q3-Q4 2026', task: 'Interior Work', status: 'upcoming' },
    { date: 'Q4 2026', task: 'Final Inspections', status: 'upcoming' },
    { date: 'Q4 2026', task: 'Move in', status: 'upcoming' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Our New Home Journey</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#progress" className="text-gray-600 hover:text-blue-600 transition-colors">Progress</a>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Building Our Dream Home</h2>
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

      {/* Analytics Dashboard */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-gray-800">{visitCount}</div>
              <div className="text-sm text-gray-600">Site Visits</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <MessageSquare className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-gray-800">{questions.length}</div>
              <div className="text-sm text-gray-600">Questions Received</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Wrench className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
              <div className="text-2xl font-bold text-gray-800">0%</div>
              <div className="text-sm text-gray-600">Construction Complete</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Calendar className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-gray-800">77</div>
              <div className="text-sm text-gray-600">Weeks Remaining</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="progress" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Our Project</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modern Family Home</h3>
              <p className="text-gray-600 mb-6">
                We're excited to share our journey of building a two story home with walkout basement in the Roslindale neighborhood. This energy-efficient home will feature 4 bedrooms, 3.5 bathrooms, and an open-concept living space for our family of four.
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
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Project Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Square Footage:</span>
                    <span className="font-medium">2,600 sq ft</span>
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
                    <span className="font-medium">7,032 sq ft</span>
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Construction Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {constructionImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Construction Timeline</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-4 ${
                  milestone.status === 'completed' ? 'bg-green-500' :
                  milestone.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                }`}></div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
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
    </div>
  );
};

export default HouseProjectWebsite;
import { useState, useEffect } from 'react';
import { X, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import angularCertif from '../assets/img/certifications/Angular conv 1.png'
import bigDataCertif from '../assets/img/certifications/Big_Data_Engineer_Certificate_Badge20241220-26-z28tzq conv 1.png'
import iaCertif from '../assets/img/certifications/image.png'
import aspCertif from '../assets/img/certifications/Coursera WDHLGKRC5VV7 (1) conv 1.png'
import scrumCertif from '../assets/img/certifications/ScrumFundamentalsCertified-LinaBenMoussa-1004785 conv 1.png'

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Remplacez ces URLs par vos vraies images de certifications
  const certifications = [
    {
      id: 1,
      name: "Angular",
      image: angularCertif,
    },
    {
      id: 2,
      name: "Artificial Intelligence",
      image: iaCertif,
    },
    {
      id: 3,
      name: "Big Data Engineer Certificate",
      image: bigDataCertif,
    },
    {
      id: 4,
      name: "ASP.NET Core",
      image: aspCertif,
    },
    {
      id: 5,
      name: "Scrum Fundamentals Certified",
      image: scrumCertif,
    },
   
  ];

  // Auto-scroll du carrousel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certifications.length);
      }, 3000); // Change toutes les 3 secondes

      return () => clearInterval(interval);
    }
  }, [isPlaying, certifications.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    setIsPlaying(false); // Arrêter le carrousel quand on ouvre le modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  const getVisibleCerts = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % certifications.length;
      visible.push(certifications[index]);
    }
    return visible;
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Contrôles du carrousel */}
        <div className="flex justify-center items-center gap-4 mb-8" style={{ display: 'none' }}>
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={togglePlay}
            className="p-3 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button
            onClick={goToNext}
            className="p-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carrousel de certifications */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleCerts().map((cert, index) => (
              <div
                key={`${cert.id}-${currentIndex}`}
                className={`flex-shrink-0 w-full md:w-1/5 p-4 ${
                  index === 2 ? 'scale-110 z-10' : 'scale-95 opacity-75'
                } transition-all duration-500`}
              >
                <div
                  className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=${encodeURIComponent(cert.name)}`;
                      }}
                    />
                    
                    {/* Overlay avec nom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">{cert.name}</h3>
                        <p className="text-white/80 text-sm mt-1">Cliquez pour agrandir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center gap-2 mt-8" style={{ display: 'none' }}>
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-400 scale-110'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal pour agrandir la certification */}
      {isModalOpen && selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
            >
              <X size={24} />
            </button>

            {/* Image agrandie */}
            <div className="relative">
              <img
                src={selectedCert.image}
                alt={selectedCert.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(selectedCert.name)}`;
                }}
              />
              
              {/* Titre en overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-2xl">{selectedCert.name}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
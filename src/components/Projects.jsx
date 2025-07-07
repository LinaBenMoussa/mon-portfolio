import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Github, ExternalLink, Calendar, Tag, Volume2, VolumeX, Maximize2, X, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from './Navbar';
import videoPFE from '../assets/videos/app final final.mp4'
import imagePFE from '../assets/img/interface export excel.png'
import videoHotel from '../assets/videos/hotel reservation.mp4'
import imageHotel from '../assets/img/image.png'


const Projects = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const videoRefs = useRef({});

  const projects = [
    {
      id: 1,
      title: "Employee Evaluation System",
      description:
        "A full-stack web application that enables managers to evaluate employee performance based on task completion, delay tracking, and working hours monitoring. The platform includes a dynamic and user-friendly dashboard for real-time performance insights.",
      technologies: [
        "React",
        "Spring Boot",
        "MySQL",
        "JWT",
        "CI/CD",
        "Chart.js",
      ],
      videoUrl: videoPFE,
      poster: imagePFE,
      githubUrlFront:
        "https://github.com/LinaBenMoussa/EvaluationCollaborateursFrontend.git",
      githubUrlBack: "https://github.com/LinaBenMoussa/Eval-Coollab-Back.git",
      liveUrl: "",
      date: "2025-05",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "hotel reservation system",
      description:
        "A full-featured hotel booking application that allows users to search for available rooms, make reservations, manage bookings, and view availability in real time. The system also includes an admin dashboard for hotel staff to manage room inventory and customer information.",
      technologies: ["Angular", ".NET Core", "SSMS"],
      videoUrl: videoHotel,
      poster: imageHotel,
      githubUrlFront:
        "https://github.com/LinaBenMoussa/Angular-Project.git",
      githubUrlBack: "https://github.com/LinaBenMoussa/AgenceVoyageAPI.git",
      liveUrl: "",
      date: "2024-06",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive maps, and data visualization charts.",
      technologies: ["React", "D3.js", "OpenWeather API", "Leaflet"],
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/480/SampleVideo_1280x720_5mb.mp4", // Replace with your video
      githubUrl: "https://github.com/LinaBenMoussa/weather-dashboard",
      liveUrl: "https://your-weather-demo.com",
      date: "2024-06",
      category: "Frontend",
    },
  ];

  // Load video metadata when component mounts
  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.load(); // Force reload of video metadata
      }
    });
  }, []);

  const handleVideoLoad = (projectId) => {
    setVideoLoaded(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleVideoError = (projectId) => {
    console.error(`Video failed to load for project ${projectId}`);
    setVideoLoaded(prev => ({
      ...prev,
      [projectId]: false
    }));
  };

  const toggleVideo = (projectId) => {
    const video = videoRefs.current[projectId];
    if (!video) return;

    if (playingVideo === projectId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach(v => v && v.pause());
      setPlayingVideo(projectId);
      video.play();
    }
  };

  const toggleMute = (projectId) => {
    const video = videoRefs.current[projectId];
    if (!video) return;

    video.muted = !video.muted;
    setMutedVideos(prev => ({
      ...prev,
      [projectId]: video.muted
    }));
  };

  const openFullscreen = (projectId) => {
    setFullscreenVideo(projectId);
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
  };

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore my latest work through interactive video demos and detailed project showcases
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-800 overflow-hidden">
                  {/* Loading/Error State */}
                  {!videoLoaded[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="text-center text-white">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                        <p className="text-sm">Loading video...</p>
                      </div>
                    </div>
                  )}

                  <video
                    ref={(el) => (videoRefs.current[project.id] = el)}
                    src={project.videoUrl}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      videoLoaded[project.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loop
                    muted={mutedVideos[project.id] !== false}
                    onEnded={() => setPlayingVideo(null)}
                    onLoadedData={() => handleVideoLoad(project.id)}
                    onError={() => handleVideoError(project.id)}
                    preload="metadata"
                    poster={project.poster}
                  />
                  
                  {/* Video Controls Overlay */}
                  {videoLoaded[project.id] && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <button
                          onClick={() => toggleVideo(project.id)}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        >
                          {playingVideo === project.id ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        <button
                          onClick={() => toggleMute(project.id)}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        >
                          {mutedVideos[project.id] !== false ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <button
                          onClick={() => openFullscreen(project.id)}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        >
                          <Maximize2 size={20} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Play Button (when video is not playing) */}
                  {playingVideo !== project.id && videoLoaded[project.id] && (
                    <button
                      onClick={() => toggleVideo(project.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300">
                        <Play size={32} className="ml-1" />
                      </div>
                    </button>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar size={16} />
                      {formatDate(project.date)}
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Tag size={16} />
                      {project.category}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description with Read More */}
                  <div className="mb-4">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {expandedDescriptions[project.id] 
                        ? project.description 
                        : truncateText(project.description, 100)
                      }
                    </p>
                    
                    {project.description.length > 100 && (
                      <button
                        onClick={() => toggleDescription(project.id)}
                        className="flex items-center gap-1 mt-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300"
                      >
                        {expandedDescriptions[project.id] ? (
                          <>
                            <span>Read Less</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {/* GitHub Links - Show both if available */}
                    {project.githubUrlFront && project.githubUrlBack ? (
                      <div className="flex-1 flex gap-2">
                        <a
                          href={project.githubUrlFront}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105 text-xs"
                        >
                          <Github size={14} />
                          Frontend
                        </a>
                        <a
                          href={project.githubUrlBack}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105 text-xs"
                        >
                          <Github size={14} />
                          Backend
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    
                    {/* Live Demo Button - Only show if liveUrl exists */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-16 mb-8">
          <a
            href="https://github.com/LinaBenMoussa" // Remplacez par votre vrai lien GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            <span>View More Projects on GitHub</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <X size={20} />
            </button>
            
            <video
              src={projects.find(p => p.id === fullscreenVideo)?.videoUrl}
              className="w-full h-full object-contain"
              controls
              autoPlay
              loop
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
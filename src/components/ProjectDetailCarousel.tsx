import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
}

interface ProjectDetailCarouselProps {
    project: Project;
    onClose: () => void;
}

const ProjectDetailCarousel: React.FC<ProjectDetailCarouselProps> = ({ project, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [allImageDimensions, setAllImageDimensions] = useState<{ [key: number]: { width: number; height: number } }>({});

    // Add this function to handle image load
    const handleImageLoad = (index: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        setAllImageDimensions(prev => ({
            ...prev,
            [index]: { width: img.naturalWidth, height: img.naturalHeight }
        }));
    };

    // Calculate container aspect ratio based on image
    const getContainerStyle = () => {
        const currentImageDims = allImageDimensions[currentIndex];

        if (!currentImageDims || currentImageDims.width === 0) {
            return { aspectRatio: '16/9' }; // Default aspect ratio
        }

        const aspectRatio = currentImageDims.width / currentImageDims.height;
        const maxWidth = window.innerWidth * 0.85; // Reduced from 0.9 for better mobile spacing
        const maxHeight = window.innerHeight * 0.6;

        let width = Math.min(maxWidth, currentImageDims.width);
        let height = width / aspectRatio;

        if (height > maxHeight) {
            height = maxHeight;
            width = height * aspectRatio;
        }

        return {
            width: `${width}px`,
            height: `${height}px`,
            transition: 'width 0.3s ease, height 0.3s ease'
        };
    };

    useEffect(() => {
        setIsVisible(true);

        // Add keyboard navigation
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300);
    };

    return (
        <div className={`fixed inset-0 z-50 bg-black transition-all duration-500 ${isVisible ? 'bg-opacity-95 backdrop-blur-sm' : 'bg-opacity-0'
            }`}>
            {/* Background Pattern - Hidden on mobile */}
            <div className="absolute inset-0 opacity-10 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)`
                }} />
            </div>

            {/* Header */}
            <div className={`relative z-10 flex items-center justify-between p-4 md:p-6 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                }`}>
                <div className="flex items-center space-x-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-white">{project.title}</h1>
                        <p className="text-gray-400 capitalize text-sm md:text-base">{project.category}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
                        >
                            <ExternalLink size={18} className="md:w-5 md:h-5" />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
                        >
                            <Github size={18} className="md:w-5 md:h-5" />
                        </a>
                    )}
                    <button
                        onClick={handleClose}
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
                    >
                        <X size={18} className="md:w-5 md:h-5" />
                    </button>
                </div>
            </div>

            {/* Main Carousel */}
            <div className="flex-1 flex items-center justify-center px-4 md:px-6 pb-4 md:pb-6">
                <div className={`relative w-full max-w-5xl transition-all duration-700 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}>

                    {/* Navigation Container with External Arrows */}
                    <div className="relative flex items-center justify-center gap-3 md:gap-6">
                        {/* Left Arrow - Outside Image */}
                        {project.images.length > 1 && (
                            <button
                                onClick={prevSlide}
                                className="flex-shrink-0 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-200 hover:scale-110 border border-white/20"
                            >
                                <ChevronLeft size={20} className="md:w-7 md:h-7" />
                            </button>
                        )}

                        {/* Main Image - Clean container without extra backgrounds */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto"
                            style={getContainerStyle()}
                        >
                            {project.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ${index === currentIndex
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-105'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        className="w-full h-full object-contain bg-gray-900"
                                        onLoad={handleImageLoad(index)}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://images.unsplash.com/photo-${1500000000000 + index}?w=800&h=600&fit=crop`;
                                        }}
                                    />
                                </div>
                            ))}

                            {/* Image Counter */}
                            {project.images.length > 1 && (
                                <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20 bg-black/40 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 text-white text-xs md:text-sm border border-white/20">
                                    {currentIndex + 1} / {project.images.length}
                                </div>
                            )}
                        </div>

                        {/* Right Arrow - Outside Image */}
                        {project.images.length > 1 && (
                            <button
                                onClick={nextSlide}
                                className="flex-shrink-0 p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-200 hover:scale-110 border border-white/20"
                            >
                                <ChevronRight size={20} className="md:w-7 md:h-7" />
                            </button>
                        )}
                    </div>

                    {/* Thumbnail Navigation - Fixed scrollbar issue */}
                    {project.images.length > 1 && (
                        <div className="mt-4 pt-2">
                            <div className="flex justify-center space-x-2 md:space-x-3 max-w-full">
                                <div className="flex space-x-2 md:space-x-3 overflow-x-auto scrollbar-hide px-4" style={{ 
                                    scrollbarWidth: 'none', 
                                    msOverflowStyle: 'none',
                                    WebkitOverflowScrolling: 'touch'
                                }}>
                                    {project.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                                                ? 'ring-2 ring-purple-400 scale-110'
                                                : 'opacity-60 hover:opacity-100 hover:scale-105'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = `https://images.unsplash.com/photo-${1500000000000 + index}?w=100&h=100&fit=crop`;
                                                }}
                                            />
                                            {index === currentIndex && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Project Info Footer */}
            <div className={`relative z-10 p-4 md:p-5 border-t border-white/10 transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="max-w-5xl mx-auto">
                    <p className="text-gray-300 mb-3 md:mb-4 text-center text-sm md:text-base">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 md:px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs md:text-sm backdrop-blur-sm border border-white/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Keyboard Navigation Instructions - Hidden on mobile */}
            {project.images.length > 1 && (
                <div className="absolute bottom-4 left-6 text-gray-500 text-xs hidden md:block">
                    Use ← → arrow keys to navigate • ESC to close
                </div>
            )}

            {/* Custom CSS to hide scrollbar */}
            <style>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default ProjectDetailCarousel;
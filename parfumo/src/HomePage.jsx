import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fragranceHouses = [
    {
        id: 1,
        name: 'Xerjoff',
        description: 'Italian luxury perfumery combining tradition with innovation',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=800&h=600&fit=crop',
    },
    {
        id: 2,
        name: 'Byredo',
        description: 'Swedish luxury brand creating modern fragrances with purpose',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop',
    },
    {
        id: 3,
        name: 'Nishane',
        description: 'Istanbul-based niche perfume house with artistic vision',
        image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
    },
    {
        id: 4,
        name: 'Parfums de Marly',
        description: 'French elegance inspired by the opulent 18th century',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=600&fit=crop',
    },
    {
        id: 5,
        name: 'Creed',
        description: 'Heritage perfumer with over 260 years of excellence',
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=600&fit=crop',
    },
    {
        id: 6,
        name: 'Frédéric Malle',
        description: 'Publisher of perfumes showcasing master perfumers',
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=600&fit=crop',
    },
    {
        id: 7,
        name: 'Penhaligons',
        description: 'British perfumery with Victorian heritage and wit',
        image: 'https://images.unsplash.com/photo-1594998045047-c5e6c35b671d?w=800&h=600&fit=crop',
    },
    {
        id: 8,
        name: 'Diptyque',
        description: 'Parisian brand blending art, fragrance, and design',
        image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=600&fit=crop',
    },
    {
        id: 9,
        name: 'Maison Francis Kurkdjian',
        description: 'Contemporary French perfumery with architectural precision',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=600&fit=crop',
    },
    {
        id: 10,
        name: 'Amouage',
        description: 'Omani luxury house creating opulent oriental fragrances',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop',
    },
];

const signatureScents = [
    {
        id: 1,
        name: 'Creed Aventus Absolu',
        house: 'Creed',
        notes: 'Blackcurrant, Bergamot, Apple, Rose, Birch, Patchouli, Oakmoss',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=400&h=500&fit=crop',
    },
    {
        id: 2,
        name: 'Nishane Hacivat',
        house: 'Nishane',
        notes: 'Pineapple, Grapefruit, Bergamot, Cedar, Patchouli, Oakmoss',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop',
    },
    {
        id: 3,
        name: 'Xerjoff Naxos',
        house: 'Xerjoff',
        notes: 'Lavender, Bergamot, Lemon, Cinnamon, Tobacco, Vanilla, Tonka Bean',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    },
    {
        id: 4,
        name: 'MFK Grand Soir',
        house: 'Maison Francis Kurkdjian',
        notes: 'Vanilla, Amber, Benzoin, Tonka Bean, Labdanum, Rose',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop',
    },
    {
        id: 5,
        name: 'PDM Parceval',
        house: 'Parfums de Marly',
        notes: 'Bergamot, Blackcurrant, Rose, Jasmine, Sandalwood, Vanilla',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop',
    },
];

export function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % fragranceHouses.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % fragranceHouses.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + fragranceHouses.length) % fragranceHouses.length);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Carousel */}
            <section className="relative h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                    >
                        <div className="relative h-full">
                            <ImageWithFallback
                                src={fragranceHouses[currentSlide].image}
                                alt={fragranceHouses[currentSlide].name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div className="max-w-4xl px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <h1 className="font-display text-5xl md:text-7xl mb-4 text-white">
                                        {fragranceHouses[currentSlide].name}
                                    </h1>
                                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                                        {fragranceHouses[currentSlide].description}
                                    </p>
                                    <Button
                                        onClick={() => navigate('/houses')}
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-10"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-10"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {fragranceHouses.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentSlide ? 'bg-primary' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Signature Scents */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-4xl md:text-5xl mb-4 text-primary">
                            Signature Scents
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Discover our carefully curated collection of the most celebrated niche fragrances
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {signatureScents.map((scent, index) => (
                            <motion.div
                                key={scent.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                                    <CardContent className="p-0">
                                        <div className="aspect-[4/5] relative overflow-hidden rounded-t-lg">
                                            <ImageWithFallback
                                                src={scent.image}
                                                alt={scent.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                                                <Star className="h-3 w-3 text-primary fill-primary" />
                                                <span className="text-white text-sm">{scent.rating}</span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors duration-200">
                                                {scent.name}
                                            </h3>
                                            <p className="text-primary text-sm mb-3">{scent.house}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {scent.notes}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mt-12"
                    >
                        <Button
                            onClick={() => navigate('/recommend')}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                        >
                            Find Your Perfect Scent
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
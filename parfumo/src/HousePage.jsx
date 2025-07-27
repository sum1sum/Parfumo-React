import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fragranceHouses = [
    {
        id: 1,
        name: 'Xerjoff',
        origin: 'Italy',
        founded: '2003',
        description: 'Italian luxury perfumery combining tradition with innovation, known for their precious ingredients and artistic bottles.',
        specialties: ['Oriental', 'Woody', 'Floral'],
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=600&h=400&fit=crop',
        className: 'md:col-span-2 md:row-span-2',
    },
    {
        id: 2,
        name: 'Byredo',
        origin: 'Sweden',
        founded: '2006',
        description: 'Swedish luxury brand creating modern fragrances with purpose and minimalist aesthetic.',
        specialties: ['Fresh', 'Woody', 'Floral'],
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=300&fit=crop',
        className: 'md:col-span-1',
    },
    {
        id: 3,
        name: 'Nishane',
        origin: 'Turkey',
        founded: '2012',
        description: 'Istanbul-based niche perfume house with artistic vision and bold compositions.',
        specialties: ['Oriental', 'Spicy', 'Woody'],
        image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=300&fit=crop',
        className: 'md:col-span-1',
    },
    {
        id: 4,
        name: 'Parfums de Marly',
        origin: 'France',
        founded: '2009',
        description: 'French elegance inspired by the opulent 18th century court of King Louis XV.',
        specialties: ['Oriental', 'Fruity', 'Gourmand'],
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=400&fit=crop',
        className: 'md:col-span-2',
    },
    {
        id: 5,
        name: 'Creed',
        origin: 'France',
        founded: '1760',
        description: 'Heritage perfumer with over 260 years of excellence, favored by royalty and celebrities.',
        specialties: ['Fresh', 'Woody', 'Chypre'],
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&h=300&fit=crop',
        className: 'md:col-span-1',
    },
    {
        id: 6,
        name: 'Frédéric Malle',
        origin: 'France',
        founded: '2000',
        description: 'Publisher of perfumes showcasing master perfumers with complete creative freedom.',
        specialties: ['Floral', 'Oriental', 'Woody'],
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&h=300&fit=crop',
        className: 'md:col-span-1',
    },
    {
        id: 7,
        name: 'Penhaligons',
        origin: 'England',
        founded: '1870',
        description: 'British perfumery with Victorian heritage, wit, and eccentric British charm.',
        specialties: ['Fresh', 'Floral', 'Fougère'],
        image: 'https://images.unsplash.com/photo-1594998045047-c5e6c35b671d?w=600&h=400&fit=crop',
        className: 'md:col-span-2',
    },
    {
        id: 8,
        name: 'Diptyque',
        origin: 'France',
        founded: '1961',
        description: 'Parisian brand blending art, fragrance, and design with sophisticated simplicity.',
        specialties: ['Fresh', 'Woody', 'Floral'],
        image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=300&fit=crop',
        className: 'md:col-span-1',
    },
    {
        id: 9,
        name: 'Maison Francis Kurkdjian',
        origin: 'France',
        founded: '2009',
        description: 'Contemporary French perfumery with architectural precision and modern elegance.',
        specialties: ['Fresh', 'Floral', 'Oriental'],
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=300&fit=crop',
        className: 'md:col-span-1',
    },
    {
        id: 10,
        name: 'Amouage',
        origin: 'Oman',
        founded: '1983',
        description: 'Omani luxury house creating opulent oriental fragrances with precious ingredients.',
        specialties: ['Oriental', 'Woody', 'Spicy'],
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop',
        className: 'md:col-span-2',
    },
];

export function HousesPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-4xl md:text-6xl mb-4 text-primary">
                        Fragrance Houses
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore the most prestigious niche fragrance houses, each with their unique heritage,
                        artistry, and olfactory philosophy that defines luxury perfumery.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                    {fragranceHouses.map((house, index) => (
                        <motion.div
                            key={house.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={house.className}
                        >
                            <Card className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden hover:shadow-2xl hover:shadow-primary/20">
                                <CardContent className="p-0 h-full relative">
                                    <div className="absolute inset-0">
                                        <ImageWithFallback
                                            src={house.image}
                                            alt={house.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    </div>

                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="space-y-3">
                                            {/* Origin and Founded */}
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                                                    {house.origin}
                                                </Badge>
                                                <Badge variant="outline" className="bg-black/30 text-white border-white/30">
                                                    Est. {house.founded}
                                                </Badge>
                                            </div>

                                            {/* Name */}
                                            <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-primary transition-colors duration-200">
                                                {house.name}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                                                {house.description}
                                            </p>

                                            {/* Specialties */}
                                            <div className="flex flex-wrap gap-1">
                                                {house.specialties.map((specialty) => (
                                                    <Badge
                                                        key={specialty}
                                                        variant="outline"
                                                        className="bg-white/10 text-white border-white/30 text-xs"
                                                    >
                                                        {specialty}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-16 p-8 bg-card/50 rounded-lg border border-primary/20"
                >
                    <h3 className="font-display text-2xl mb-4 text-primary">Discover Your Signature Scent</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Each house represents decades or centuries of perfumery expertise. From the traditional
                        craftsmanship of Creed to the modern artistry of Byredo, find the fragrance house that
                        speaks to your personal style and preferences.
                    </p>
                    <motion.button
                        onClick={() => navigate('/recommend')}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Personalized Recommendations
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
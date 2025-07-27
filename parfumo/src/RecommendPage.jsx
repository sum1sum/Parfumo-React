import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const questions = [
    {
        id: 1,
        question: "What's your preferred fragrance intensity?",
        type: 'single',
        options: [
            { id: 'light', label: 'Light & Subtle', weight: { fresh: 3, floral: 2, oriental: 1 } },
            { id: 'moderate', label: 'Moderate & Balanced', weight: { woody: 2, floral: 2, fresh: 1 } },
            { id: 'strong', label: 'Strong & Bold', weight: { oriental: 3, woody: 2, spicy: 2 } },
            { id: 'projection', label: 'Maximum Projection', weight: { oriental: 3, spicy: 3, woody: 1 } },
        ],
    },
    {
        id: 2,
        question: "Which scent families appeal to you most?",
        type: 'multiple',
        options: [
            { id: 'fresh', label: 'Fresh & Citrusy', weight: { fresh: 3, aquatic: 2 } },
            { id: 'floral', label: 'Floral & Romantic', weight: { floral: 3, powdery: 1 } },
            { id: 'woody', label: 'Woody & Earthy', weight: { woody: 3, smoky: 1 } },
            { id: 'oriental', label: 'Oriental & Spicy', weight: { oriental: 3, spicy: 2 } },
            { id: 'gourmand', label: 'Sweet & Gourmand', weight: { gourmand: 3, vanilla: 2 } },
            { id: 'green', label: 'Green & Herbal', weight: { green: 3, fresh: 1 } },
        ],
    },
    {
        id: 3,
        question: "When do you typically wear fragrance?",
        type: 'multiple',
        options: [
            { id: 'daily', label: 'Daily Office Wear', weight: { fresh: 2, clean: 2 } },
            { id: 'evening', label: 'Evening Events', weight: { oriental: 3, sophisticated: 2 } },
            { id: 'special', label: 'Special Occasions', weight: { luxurious: 3, unique: 2 } },
            { id: 'date', label: 'Romantic Dates', weight: { seductive: 3, warm: 2 } },
            { id: 'casual', label: 'Casual Outings', weight: { fresh: 2, versatile: 2 } },
        ],
    },
    {
        id: 4,
        question: "What season do you wear fragrance most?",
        type: 'single',
        options: [
            { id: 'spring', label: 'Spring', weight: { fresh: 3, floral: 3, green: 2 } },
            { id: 'summer', label: 'Summer', weight: { fresh: 3, aquatic: 3, citrus: 2 } },
            { id: 'autumn', label: 'Autumn', weight: { woody: 3, spicy: 2, warm: 2 } },
            { id: 'winter', label: 'Winter', weight: { oriental: 3, gourmand: 2, heavy: 2 } },
        ],
    },
    {
        id: 5,
        question: "Which notes do you find most appealing?",
        type: 'multiple',
        options: [
            { id: 'bergamot', label: 'Bergamot & Citrus', weight: { fresh: 2, citrus: 3 } },
            { id: 'rose', label: 'Rose & Florals', weight: { floral: 3, romantic: 2 } },
            { id: 'vanilla', label: 'Vanilla & Sweet', weight: { gourmand: 3, warm: 2 } },
            { id: 'oud', label: 'Oud & Incense', weight: { oriental: 3, mystical: 2 } },
            { id: 'sandalwood', label: 'Sandalwood & Woods', weight: { woody: 3, creamy: 1 } },
            { id: 'patchouli', label: 'Patchouli & Earth', weight: { earthy: 3, bohemian: 2 } },
        ],
    },
];

const recommendations = {
    fresh_citrus: {
        name: 'Acqua di Parma Colonia',
        house: 'Acqua di Parma',
        description: 'A timeless Italian classic with sparkling citrus freshness',
        notes: ['Bergamot', 'Sweet Orange', 'Lemon', 'Rose', 'Lavender', 'Sandalwood'],
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=400&h=500&fit=crop',
        whyRecommended: 'Perfect for your preference for light, fresh scents with citrusy brightness',
    },
    oriental_spicy: {
        name: 'Amouage Jubilation XXV',
        house: 'Amouage',
        description: 'An opulent oriental masterpiece with rich spices and precious woods',
        notes: ['Frankincense', 'Rose', 'Saffron', 'Myrrh', 'Sandalwood', 'Amber'],
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
        whyRecommended: 'Ideal for your love of bold, oriental fragrances with complex spice blends',
    },
    woody_sophisticated: {
        name: 'Tom Ford Oud Wood',
        house: 'Tom Ford',
        description: 'A smooth, sophisticated woody blend with precious oud',
        notes: ['Oud', 'Sandalwood', 'Rosewood', 'Vanilla', 'Amber', 'Rose'],
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop',
        whyRecommended: 'Matches your sophisticated taste for woody, warm fragrances',
    },
    floral_romantic: {
        name: 'MFK À la Rose',
        house: 'Maison Francis Kurkdjian',
        description: 'An exquisite rose composition that captures pure floral elegance',
        notes: ['Rose', 'Violet', 'Cedar', 'Musk', 'Pink Pepper'],
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop',
        whyRecommended: 'Perfect for your appreciation of romantic, floral compositions',
    },
    gourmand_sweet: {
        name: 'Xerjoff Naxos',
        house: 'Xerjoff',
        description: 'A luxurious gourmand with honey, tobacco, and vanilla',
        notes: ['Lavender', 'Bergamot', 'Cinnamon', 'Tobacco', 'Honey', 'Vanilla'],
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop',
        whyRecommended: 'Ideal for your sweet tooth and love of warm, gourmand fragrances',
    },
};

export function RecommendPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isComplete, setIsComplete] = useState(false);
    const [recommendation, setRecommendation] = useState(null);

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    const handleAnswer = (questionId, optionId, isMultiple) => {
        setAnswers(prev => {
            const current = prev[questionId] || [];
            if (isMultiple) {
                if (current.includes(optionId)) {
                    return { ...prev, [questionId]: current.filter(id => id !== optionId) };
                } else {
                    return { ...prev, [questionId]: [...current, optionId] };
                }
            } else {
                return { ...prev, [questionId]: [optionId] };
            }
        });
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            completeQuestionnaire();
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const completeQuestionnaire = () => {
        // Simple recommendation algorithm based on answers
        const weights = {};

        Object.entries(answers).forEach(([questionId, selectedOptions]) => {
            const question = questions.find(q => q.id === parseInt(questionId));
            if (question) {
                selectedOptions.forEach(optionId => {
                    const option = question.options.find(o => o.id === optionId);
                    if (option) {
                        Object.entries(option.weight).forEach(([key, value]) => {
                            weights[key] = (weights[key] || 0) + value;
                        });
                    }
                });
            }
        });

        // Determine recommendation based on highest weight
        const topWeight = Object.entries(weights).sort((a, b) => b[1] - a[1])[0];
        let recommendationKey = 'fresh_citrus'; // default

        if (topWeight) {
            const [category] = topWeight;
            if (weights.oriental >= 6) recommendationKey = 'oriental_spicy';
            else if (weights.woody >= 5) recommendationKey = 'woody_sophisticated';
            else if (weights.floral >= 5) recommendationKey = 'floral_romantic';
            else if (weights.gourmand >= 4) recommendationKey = 'gourmand_sweet';
            else recommendationKey = 'fresh_citrus';
        }

        setRecommendation(recommendations[recommendationKey]);
        setIsComplete(true);
    };

    const restart = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setIsComplete(false);
        setRecommendation(null);
    };

    if (isComplete && recommendation) {
        return (
            <div className="min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <Sparkles className="h-8 w-8 text-primary mr-2" />
                            <h1 className="font-display text-4xl text-primary">Your Perfect Match</h1>
                        </div>
                        <p className="text-xl text-muted-foreground">
                            Based on your preferences, we've found your ideal niche fragrance
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="border-primary/20 shadow-2xl shadow-primary/10">
                            <CardContent className="p-8">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="font-display text-3xl mb-2">{recommendation.name}</h2>
                                            <p className="text-primary text-lg mb-4">{recommendation.house}</p>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {recommendation.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg mb-3">Fragrance Notes</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {recommendation.notes.map((note) => (
                                                    <Badge key={note} variant="secondary" className="bg-primary/10 text-primary">
                                                        {note}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-4 bg-muted/50 rounded-lg">
                                            <h4 className="text-lg mb-2 flex items-center">
                                                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                                                Why This Fragrance?
                                            </h4>
                                            <p className="text-muted-foreground">{recommendation.whyRecommended}</p>
                                        </div>

                                        <div className="flex items-center justify-between pt-4">
                                            <div className="flex items-center space-x-1">
                                                <Star className="h-5 w-5 text-primary fill-primary" />
                                                <span className="text-lg">{recommendation.rating}</span>
                                                <span className="text-muted-foreground">/ 5.0</span>
                                            </div>
                                            <Button
                                                onClick={restart}
                                                variant="outline"
                                                className="border-primary/50 text-primary hover:bg-primary/10"
                                            >
                                                Try Again
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                                        <ImageWithFallback
                                            src={recommendation.image}
                                            alt={recommendation.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];
    const currentAnswers = answers[currentQ.id] || [];

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-display text-4xl md:text-5xl mb-4 text-primary">
                        Find Your Signature Scent
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Answer a few questions about your preferences, and we'll recommend the perfect niche fragrance for you
                    </p>
                </motion.div>

                {/* Progress */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
                        <span className="text-sm text-primary">{Math.round(progress)}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </motion.div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border-primary/20 shadow-xl">
                            <CardHeader className="text-center pb-6">
                                <CardTitle className="font-display text-2xl">{currentQ.question}</CardTitle>
                                {currentQ.type === 'multiple' && (
                                    <p className="text-sm text-muted-foreground">You can select multiple options</p>
                                )}
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3">
                                    {currentQ.options.map((option) => {
                                        const isSelected = currentAnswers.includes(option.id);
                                        return (
                                            <motion.button
                                                key={option.id}
                                                onClick={() => handleAnswer(currentQ.id, option.id, currentQ.type === 'multiple')}
                                                className={`p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                                                    isSelected
                                                        ? 'border-primary bg-primary/10 text-primary'
                                                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                                                }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <div className="flex items-center">
                                                    {isSelected && (
                                                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                                    )}
                                                    <span className="text-base">{option.label}</span>
                                                </div>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center justify-between mt-8"
                >
                    <Button
                        onClick={prevQuestion}
                        disabled={currentQuestion === 0}
                        variant="outline"
                        className="flex items-center space-x-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Previous</span>
                    </Button>

                    <Button
                        onClick={nextQuestion}
                        disabled={currentAnswers.length === 0}
                        className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
                    >
                        <span>{currentQuestion === questions.length - 1 ? 'Get Recommendation' : 'Next'}</span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
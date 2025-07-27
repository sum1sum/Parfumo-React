import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
    const navigate = useNavigate();

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Facebook, href: '#', label: 'Facebook' },
    ];

    const quickLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ];

    return (
        <footer className="bg-card border-t border-primary/20 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <button
                            onClick={() => navigate('/')}
                            className="font-display text-2xl text-primary hover:text-primary/80 transition-colors duration-200"
                        >
                            Fragrantica
                        </button>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Discover the world of niche fragrances. Experience luxury, elegance, and artistry in every bottle.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-foreground tracking-wide">Quick Links</h4>
                        <div className="space-y-2">
                            {quickLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                                    whileHover={{ x: 5 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social & Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-foreground tracking-wide">Connect With Us</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="h-4 w-4 text-muted-foreground hover:text-primary" />
                                    </motion.a>
                                );
                            })}
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                                Subscribe to our newsletter for the latest fragrance releases
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 bg-input-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                                <motion.button
                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors duration-200"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground"
                >
                    <p>&copy; 2025 Fragrantica. All rights reserved. Crafted with passion for niche fragrances.</p>
                </motion.div>
            </div>
        </footer>
    );
}
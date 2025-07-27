import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'HOUSES', path: '/houses' },
        { name: 'RECOMMEND ME', path: '/recommend' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const getCurrentPage = () => {
        const currentPath = location.pathname;
        if (currentPath === '/' || currentPath === '/home') return '/';
        return currentPath;
    };

    const currentPage = getCurrentPage();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="cursor-pointer"
                        onClick={() => handleNavigation('/')}
                    >
                        <h1 className="font-display text-2xl text-primary tracking-wide">
                            Fragrantica
                        </h1>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.path}
                                onClick={() => handleNavigation(item.path)}
                                className={`relative text-sm tracking-wider transition-colors duration-200 ${
                                    currentPage === item.path
                                        ? 'text-primary'
                                        : 'text-foreground hover:text-primary'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                                {currentPage === item.path && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <motion.nav
                    className="md:hidden mt-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div className="py-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => handleNavigation(item.path)}
                                className={`block w-full text-left text-sm tracking-wider transition-colors duration-200 ${
                                    currentPage === item.path
                                        ? 'text-primary'
                                        : 'text-foreground hover:text-primary'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </motion.nav>
            </div>
        </header>
    );
}
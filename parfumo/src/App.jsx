import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { HomePage } from './components/HomePage';
import { HousesPage } from './components/HousesPage';
import { RecommendPage } from './components/RecommendPage';

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-background text-foreground">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/houses" element={<HousesPage />} />
                        <Route path="/recommend" element={<RecommendPage />} />
                        {/* Catch all route - redirect to home */}
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
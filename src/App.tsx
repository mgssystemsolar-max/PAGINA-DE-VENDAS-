import React, { useEffect, useState } from 'react';
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sitemap from './components/Sitemap';
import LandingPage from './components/LandingPage';

/**
 * Checks if the current environment is a preview/cloud development environment.
 * Returns true if the hostname or href contains proxy indicators.
 */
const checkPreviewEnvironment = (): boolean => {
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];
  
  const hostname = window.location.hostname;
  const href = window.location.href;
  
  return indicators.some(indicator => 
    hostname.includes(indicator) || href.includes(indicator)
  );
};

export default function App() {
  const [isPreview, setIsPreview] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsPreview(checkPreviewEnvironment());
    setIsInitialized(true);
  }, []);

  if (!isInitialized) return null;

  // Select Router based on environment
  const Router = isPreview ? HashRouter : BrowserRouter;

  // Determine redirect target for root path
  const redirectTarget = isPreview ? '/sitemap' : '/lp-video';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={redirectTarget} replace />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/lp-video" element={<LandingPage />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to={redirectTarget} replace />} />
      </Routes>
    </Router>
  );
}

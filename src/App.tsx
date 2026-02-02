import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import WholesomeBakes from './components/WholesomeBakes';
import WholewheatCakes from './components/WholewheatCakes';
import GallerySection from './components/GallerySection';
import AboutFounder from './components/AboutFounder';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import StartingPage from './components/StartingPage';
import OrganicsPage from './components/OrganicsPage';

function App() {
  const [view, setView] = useState<'starting' | 'main' | 'organics'>('starting');
  const [showAllCakes, setShowAllCakes] = useState(false);

  useEffect(() => {
    // Scroll to top when switching views
    window.scrollTo(0, 0);

    if (view === 'starting' || view === 'organics') {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [view]);

  if (view === 'starting') {
    return (
      <StartingPage
        onEnterBakes={() => setView('main')}
        onEnterOrganics={() => setView('organics')}
      />
    );
  }

  if (view === 'organics') {
    return (
      <OrganicsPage onBack={() => setView('starting')} />
    );
  }

  return (
    <>
      <Navbar onLinkClick={() => setShowAllCakes(false)} />
      {!showAllCakes ? (
        <>
          <div id="home"><Hero /></div>
          <InfoBar />
          <div id="our-cake">
            <WholesomeBakes />
            <WholewheatCakes limit={8} onViewAll={() => setShowAllCakes(true)} />
          </div>
          <div id="gallery"><GallerySection /></div>
          <div id="our-story"><AboutFounder /></div>
          <CustomerReviews />
        </>
      ) : (
        <WholewheatCakes />
      )}
      <div id="contact"><Footer /></div>
    </>
  )
}

export default App

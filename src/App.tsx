import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import WholesomeBakes from './components/WholesomeBakes';
import WholewheatCakes from './components/WholewheatCakes';
import GallerySection from './components/GallerySection';
import AboutFounder from './components/AboutFounder';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

function App() {
  const [showAllCakes, setShowAllCakes] = useState(false);

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

import { ArrowRight, Search } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants/links';
import './StartingPage.scss';
import peanutBrownies from '../assets/org/Peanut-Butter-Brownies-1-of-1 1.png';
import chocolateCake from '../assets/front-view-delicious-chocolate-cake-with-almonds 1.png';

interface StartingPageProps {
    onEnterBakes: () => void;
    onEnterOrganics: () => void;
}

const StartingPage: React.FC<StartingPageProps> = ({ onEnterBakes, onEnterOrganics }) => {
    return (
        <div className="starting-page">
            <nav className="starting-nav">
                <div className="nav-spacer"></div>
                <div className="nav-logo">Manam</div>
                <div className="nav-actions">
                    <button className="search-btn"><Search size={20} /></button>
                    <button className="order-btn" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>Order Now</button>
                </div>
            </nav>

            <div className="split-container">
                <div className="split-side bakes" onClick={onEnterBakes}>
                    <div className="bg-image" style={{ backgroundImage: `url(${chocolateCake})` }}></div>
                    <div className="overlay"></div>
                    <div className="content">
                        <span className="subtitle">THE PATISSERIE</span>
                        <h1 className="title">Manam Bakes</h1>
                        <p className="description">
                            Indulgence in every bite. Artisanal creation for the sophisticated palate.
                        </p>
                        <button className="enter-btn">
                            Enter Manam Bakes <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="split-side organics" onClick={onEnterOrganics}>
                    <div className="bg-image" style={{ backgroundImage: `url(${peanutBrownies})` }}></div>
                    <div className="overlay"></div>
                    <div className="content">
                        <span className="subtitle">THE PANTRY</span>
                        <h1 className="title">Manam Organics</h1>
                        <p className="description">
                            Indulgence in every bite. Artisanal creation for the sophisticated palate.
                        </p>
                        <button className="enter-btn">
                            Enter Manam Organics <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartingPage;

//Home.js
import './Background.css';
import LogoLoop from './Logo-Loop/Logo-Loop';

import Contact from './Contact-Me';
import FigmaIcon from './logos/figma-icon2.png'
import GitIcon from './logos/git-icon-2.png'
import KagIcon from './logos/kaggle-icon3.png'
import LinkedIcon from './logos/linkedin-icon02.png'

const imageLogos = [
  { src: FigmaIcon, alt: "Company 1", href: "https://www.figma.com/team_invite/redeem/m0PfLgcUWClUM3ro7tH3J3" },
  { src: GitIcon, alt: "Company 2", href: "https://github.com/rayolivia1/my-portfolio" },
  { src: KagIcon, alt: "Company 3", href: "https://www.kaggle.com/oliviagrayborn" },
  { src: LinkedIcon, alt: "Company 4", href: "https://www.linkedin.com/in/olivia-rb/" }

];

function Home () {
    return (
    <div className = "home-container">
        <div className = "background-container"> </div>
        <div className = "hero-page-container"> </div>
        <div className = "summary-container"><p> "I am an aspiring data scientist working to intersect data analytics with creative communication. Using my technical 
expertise, I transform complex datasets into artistic educational exhibits that focus on public health crises and humanize 
impacted communities. My work seamlessly blends storytelling with alluring visual experiences to spread awareness and 
inspire meaningful action." </p></div>
    <div className = "contact-me-page-container"><Contact/></div>
    <div style={{height: '75px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={50}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#dbc19eff"
        ariaLabel="Technology partners"
      />
        </div>
    </div>
    )
}

export default Home;

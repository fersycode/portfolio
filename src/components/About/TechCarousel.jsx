// src/components/About/TechCarousel.jsx
import { useLanguage } from '../../context/LanguageContext';
import reactImg from '../../assets/techCarouselImages/react.png';
import nextImg from '../../assets/techCarouselImages/next.js.png';
import tsImg from '../../assets/techCarouselImages/typescript.png';
import jsImg from '../../assets/techCarouselImages/javascript.png';
import angularImg from '../../assets/techCarouselImages/angular.png';
import nodeImg from '../../assets/techCarouselImages/nodejs.png';
import wpImg from '../../assets/techCarouselImages/wordpress_2.png';
import wcImg from '../../assets/techCarouselImages/woocommerce.png';
import figmaImg from '../../assets/techCarouselImages/figma.png';

import uiuxImg from '../../assets/techCarouselImages/UI-UX.png';
import gitImg from '../../assets/techCarouselImages/github.png';
import cssImg from '../../assets/techCarouselImages/css.png';
import bsImg from '../../assets/techCarouselImages/bootstrap.png';
import awsImg from '../../assets/techCarouselImages/aws.png';
import firebaseImg from '../../assets/techCarouselImages/firebase.png';
import mysqlImg from '../../assets/techCarouselImages/mysql-database.png';
import apiImg from '../../assets/techCarouselImages/restapi.png';
import devopsImg from '../../assets/techCarouselImages/devops.png';
import seoImg from '../../assets/techCarouselImages/seo.png';

const TechCarousel = () => {
  const { t } = useLanguage();

  const techStackRow1 = [
    { name: 'React.js', img: reactImg },
    { name: 'Next.js', img: nextImg },
    { name: 'TypeScript', img: tsImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'Angular', img: angularImg },
    { name: 'React Native', img: reactImg },
    { name: 'Node.js', img: nodeImg },
    { name: 'WordPress', img: wpImg },
    { name: 'WooCommerce', img: wcImg },
    { name: 'Figma', img: figmaImg }
  ];

  const techStackRow2 = [
    { name: 'UI/UX Design', img: uiuxImg },
    { name: 'Git & GitHub', img: gitImg },
    { name: 'Tailwind CSS', img: cssImg },
    { name: 'Bootstrap', img: bsImg },
    { name: 'AWS EC2', img:awsImg },
    { name: 'Firebase', img: firebaseImg },
    { name: 'MySQL', img: mysqlImg },
    { name: 'REST APIs', img: apiImg },
    { name: 'DevOps', img: devopsImg },
    { name: 'SEO', img: seoImg }
  ];

  return (
    <div className="tech-stack">
      <h3>{t('about_tech_title')}</h3>
      
      <div className="tech-carousel-container">
        <div className="tech-carousel">
          {/* Primera fila */}
          <div className="tech-track">
            {[...techStackRow1, ...techStackRow1].map((tech, index) => (
              <div className="tech-card" key={`row1-${index}`}>
                <img src={tech.img} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
          
          {/* Segunda fila (dirección opuesta) */}
          <div className="tech-track tech-track-reverse">
            {[...techStackRow2, ...techStackRow2].map((tech, index) => (
              <div className="tech-card" key={`row2-${index}`}>
                <img src={tech.img} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCarousel;
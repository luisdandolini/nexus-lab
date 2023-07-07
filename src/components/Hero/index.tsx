import './styles.css';
import HeroImage from '../../assets/Hero.png';
import Esclamacao from '../../assets/Exclamação.png';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return(
    <section className='container_hero'>
      <div className='container_content'>
        <h1 className='title'>
          Contectando <span>possibilidades,</span>
          <br />
          <div className='container_esclamacao'>
            construindo <span>resultados <img src={Esclamacao} alt="Esclamação" /></span>
          </div>
        </h1>
        {
          isMobile ? (
            <div className='img_mobile'>
              <img src={HeroImage} alt="Hero imagem" className='hero_image' />
            </div>
          ):(
            <></>
          )
        }
        
        <div className='container_button_hero'>
          <button>Entre em contato</button>
        </div>
      </div>

      {
        isMobile ? (
          <></>
        ):(
          <img src={HeroImage} alt="Hero imagem" className='hero_image' />
        )
      }
    </section>
  )
}
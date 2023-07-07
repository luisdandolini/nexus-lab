import './styles.css';
import ImageAbout from '../../assets/about.png';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return(
    <section className='container_about'>
      {
        isMobile ? (
          <h2>Sobre nós</h2>
        ) : (
          <></>
        )
      }
      <div className='container_about_content'>
        <img src={ImageAbout} alt="Image About" className='about_image' />

        <div className='container_about_text'>
          {
            isMobile ? (
              <></>
            ):(
              <h2>Sobre nós</h2>
            )
          }
          <p>
            Ousar é trazer a modernidade e buscar
            o fator UAU Os designs são  pensados para surpreender as expectativas do inicio ao fim.
            Ousar é trazer a modernidade e buscar o fator
            UAU! Os designs são pensados para surpreender as expectativas do inicio ao fim
          </p>
          <button className='button'>Entre em contato</button>
        </div>
      </div>
    </section>
  )
}
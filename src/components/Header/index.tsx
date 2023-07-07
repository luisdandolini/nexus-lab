import './styles.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import HeaderMobile from '../HeaderMobile';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <HeaderMobile />;
  }

  return(
    <header className='header'>
      <nav className='container_nav'>

        <div className='container'>
          <img src="/Logo.svg" alt="Logo Nexuslab" />
          <ul className='container_links'>
            <li><a href="/">Sobre nós</a></li>
            <li><a href="/">Portifólio</a></li>
            <li><a href="/">Processo</a></li>
          </ul>
        </div>
        
        <button className='button_contact'>Entre em contato</button>
      </nav>
    </header>
  )
}
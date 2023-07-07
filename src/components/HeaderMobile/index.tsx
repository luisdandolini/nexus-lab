import './styles.css';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function HeaderMobile(){
  const [openMenu, setOpenMenu] = useState(false)
  
  const handleToggle = () => setOpenMenu(!openMenu);

  const smoothScroll = (sectionId: any) => {
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return(
    <header>
      <div className={openMenu ? "background_mobile" : "container_header"}>
        <img src="/Logo.svg" alt='Logo Fast Sales' className="logo"></img>
        <div className="menu">
          <div onClick={handleToggle} className="toggle">
            {
              openMenu ? 
              (
                <>
                  <Icon path={mdiClose} size={1} color={'#11E956'} />
                </>
              ) 
              : 
              (
                <>
                  <span className="details"></span>
                  <span className="details"></span>
                  <span className="details"></span>
                </>
              )
            }

            {openMenu && 
              <>
                <div  className="menu_itens">
                  <ul className="links">
                    <li><a onClick={() => smoothScroll("#about")}>Sobre nós</a></li>
                    <li><a onClick={() => smoothScroll("#portfolio")}>Portfólio</a></li>
                    <li><a onClick={() => smoothScroll("#process")}>Processo</a></li>
                  </ul>
                  <div className="container_button_mobile">
                    <button>Entre em contato</button>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </header>
  )
}
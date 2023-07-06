import './style.css';
import Cpu from '../../assets/cpu.svg';
import Crown from '../../assets/crown.svg';
import Arrow from '../../assets/programming-arrows.svg';

export default function More() {
  return(
    <section className='container_more'>
      <div className='container'>
        <div className='container_content_more'>
          <img src={Arrow} alt="ícone arrow" />
          <h2>Softwares Proativos</h2>
          <p>
            Pensamos nos softwares para que eles façam o trabalho duro, a ideia é você ser guiado até o propósito de forma proativa.
          </p>
        </div>

        <div className='container_content_more'>
          <img src={Crown} alt="ícone coroa" />
          <h2>Designs Ousados</h2>
          <p>
            Ousar é trazer a modernidade e buscar o fator UAU! Os designs são pensados para surpreender as expectativas do inicio ao fim. 
          </p>
        </div>

        <div className='container_content_more'>
          <img src={Cpu} alt="ícone hardware" />
          <h2>Tecnologia de Ponta</h2>
          <p>
            Sempre buscando novidades, os softwares são arquitetados utilizando a tecnologia que será a melhor solução para a sua necessidade.
          </p>
        </div>
      </div>
    </section>
  )
}
import './styles.css';
import HeroImage from '../../assets/Hero.png';
import Esclamacao from '../../assets/Exclamação.png';

export default function Hero() {
  return(
    <section className='container_hero'>
      <div className='container_content'>
        <h1 className='title'>
          Contectando <span>possibilidades,</span>
          <br />
          <div className='container_esclamacao'>
            construindo <span>resultados</span>
            <img src={Esclamacao} alt="Esclamação" />
          </div>
        </h1>
        <div className='container_button'>
          <button>Entre em contato</button>
        </div>
      </div>

      <img src={HeroImage} alt="Hero imagem" className='hero_image' />
    </section>
  )
}
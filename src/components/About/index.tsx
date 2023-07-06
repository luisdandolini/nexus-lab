import './style.css';
import ImageAbout from '../../assets/about.png';

export default function About() {
  return(
    <section className='container_about'>
      <div className='container_about_content'>
        <img src={ImageAbout} alt="Image About" className='about_image' />

        <div className='container_about_text'>
          <h2>Sobre nós</h2>
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
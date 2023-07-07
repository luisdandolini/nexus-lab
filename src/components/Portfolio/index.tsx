import './styles.css';
import Teste from '../../assets/teste.svg';
import Fast from '../../assets/fast-sale.png';
import WebSite from '../../assets/tecpet.png';
import ViewerSite from '../../assets/link-circle.svg'

export default function Portfolio() {
  return(
    <section className='container_portfolio' id='portfolio'>
      <h2>Portifólio</h2>
      <div className='container_project'>
        <div className='container_portfolio_content'>
          <div>
            <div>
              <img src={Teste} alt="" className='image_portfolio' />
              <div className='content'>
                <h3>Título do projeto</h3>
                <p className='text'>
                  Aqui a gente coloca um textinho bonitinho relacionado ao projeto, podemos tentar criar um padrão de texto para todas as descrições!
                </p>
                <p className='skills'>
                  Feito com: <span>Figma, HTML, JavaScript, SASS, React</span>
                </p>
                <div className='viewer'>
                  <img src={ViewerSite} alt="" />
                  <a href="/">Ver site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container_portfolio_content'>
          <div>
            <div>
              <img src={Fast} alt="" className='image_portfolio' />
              <div className='content'>
                <h3>Título do projeto</h3>
                <p className='text'>
                  Aqui a gente coloca um textinho bonitinho relacionado ao projeto, podemos tentar criar um padrão de texto para todas as descrições!
                </p>
                <p className='skills'>
                  Feito com: <span>Figma, HTML, JavaScript, SASS, React</span>
                </p>
                <div className='viewer'>
                  <img src={ViewerSite} alt="" />
                  <a href="/">Ver site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container_portfolio_content'>
          <div>
            <div>
              <img src={WebSite} alt="" className='image_portfolio' />
              <div className='content'>
                <h3>Título do projeto</h3>
                <p className='text'>
                  Aqui a gente coloca um textinho bonitinho relacionado ao projeto, podemos tentar criar um padrão de texto para todas as descrições!
                </p>
                <p className='skills'>
                  Feito com: <span>Figma, HTML, JavaScript, SASS, React</span>
                </p>
                <div className='viewer'>
                  <img src={ViewerSite} alt="" />
                  <a href="/">Ver site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_button_projects'>
        <button className='more_projects'>Mais projetos</button>
        <button className='contact'>Entre em contato</button>
      </div>
    </section>
  )
}
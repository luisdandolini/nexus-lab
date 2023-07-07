import './styles.css';
import Contact from '../../assets/contact.svg';
import Planejamento from '../../assets/planejamento.png';
import Dev from '../../assets/dev.svg';
import Show from '../../assets/show.png';
import Divider from '../../assets/arrow-right.svg';

export default function Process() {
  return(
    <section className="container_process">
      <h2>Processo</h2>
      <div className='container_process_content'>
        <div className='process'>
          <img src={Contact} alt="" />
          <h3>Contato</h3>
          <p>
            Entendemos suas necessidades e requisitos, garantindo que o resultado final seja perfeitamente adaptado às suas expectativas.
          </p>
        </div>

        <img src={Divider} alt="" className='divider' />

        <div className='process'>
          <img src={Planejamento} alt="" />
          <h3>Planejamento</h3>
          <p>
            Damos vida à sua visão com o talento criativo dos nossos designers. Utilizamos nossa expertise para criar um planejamento detalhado, que faça sentido para o seu projeto combinando estética e funcionalidade de forma harmoniosa.
          </p>
        </div>
        
        <img src={Divider} alt="" className='divider' />

        <div className='process'>
          <img src={Dev} alt="" />
          <h3>Desenvolvimento</h3>
          <p>
            Nosso time de desenvolvimento entra em ação para transformar o planejamento em um produto completo e funcional. Com tecnologia de ponta e conhecimento especializado, estamos prontos para trazer sua visão à vida de forma eficiente e confiável.
          </p>
        </div>

        <img src={Divider} alt="" className='divider' />

        <div className='process'>
          <img src={Show} alt="" />
          <h3>Apresentação</h3>
          <p>
            Chegou o momento de mostrar o resultado final. Preparamos uma apresentação cuidadosa para você, destacando todas as características e funcionalidades do produto desenvolvido exclusivamente para atender às suas necessidades. Após sua aprovação, entregamos o produto final com entusiasmo e orgulho.
          </p>
        </div>
      </div>
    </section>
  )
}
import './styles.css';
import Websites from '../../assets/monitor-mobile.svg';
import Sistemas from '../../assets/monitor.svg';
import Mobile from '../../assets/mobile.svg';

export default function Products() {
  return(
    <section className='container_services'>
      <h2>Serviços</h2>
      <div className='services'>

        <div className='divider_details'></div>

        <div className='services_content'>
          <img src={Websites} alt="" />
          <h3>Websites</h3>
          <p>
            Cada negócio é único e seu site também deve ser. Desenvolvemos websites personalizados que se adaptam perfeitamente às suas necessidades e destacam a sua marca. Tenha uma presença online impactante e conquiste mais clientes.
          </p>
        </div>

        <div className='divider_details'></div>

        <div className='services_content'> 
          <img src={Sistemas} alt="" />
          <h3>Sistemas</h3>
          <p>
            Muitas empresas possuem processos únicos e esse é o diferencial competitivo, assim os SAAS não atendem e forçam a adaptação. Nós fazemos o desenho do processo e desenvolvemos o software exclusivamente para você.
          </p>
        </div> 

        <div className='divider_details'></div>

        <div className='services_content'>
          <img src={Mobile} alt="" />
          <h3>Aplicativos</h3>
          <p>
            Tanto para oferecer mobilidade para sua solução ou lançar uma nova e potencial Startup. Estamos aqui para entender e levantar os requisitos, desenhar e desenvolver a ideia para, no fim, você usufruir dessa magnífica criação.
          </p>
        </div>

        <div className='divider_details'></div>
      </div>
    </section>
  )
}
import './style.css'

function Contacts() {
  return (
    <section id='section-contacts' className='box-default'>

        <div>
          <h2 className='h2-default'>Nossas Redes</h2>
          <p className='p-default'>Siga nossas redes sociais para ficar por dentro de tudo que acontece!</p>
        </div>
        
        <ul>  
          <li>
            <img src="src\assets\instagram.png" alt="Logo Instagram" />
            <a href="https://www.instagram.com/">@animeconnect</a>
          </li>
          <li>
            <img src="src\assets\twitter.png" alt="Logo X (Twitter)" />
            <a href="https://twitter.com/?lang=pt-br">@animeconnect</a>
          </li>
          <li>
            <img src="src\assets\facebook.png" alt="Logo Facebook" />
            <a href="https://www.facebook.com/?locale=pt_BR">Anime Connect</a>
          </li>
          <li>
            <img src="src\assets\youtube.png" alt="Logo YouTube" />
            <a href="https://www.youtube.com/">Anime Connect - Canal Oficial</a>
          </li>
        </ul>

    </section>
  )
}

export default Contacts
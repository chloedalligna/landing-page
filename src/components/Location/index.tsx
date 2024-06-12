import "./style.css";

function Location() {
  return (
    <section id="section-location" className="box-default">
      <div>
        <h2 className="h2-default">Nossa Localização</h2>
        <p className="p-default">Prepara o GPS!</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.374613470672!2d-40.27135422388779!3d-19.824096135021286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7ea80a57199cb%3A0xafaa88031571c172!2sOriundi%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1718149400288!5m2!1spt-BR!2sbr"
        width="1250"
        height="550"
        style={{border:"0"}}
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Location;

import "./style.css";

function Schedule() {
  return (
    <section id="section-schedule">
      
      <table>

        <thead>
          <tr className="tr-thead">
            <td className="th colunm1">21/06</td>
            <td className="th colunm2">22/06</td>
            <td className="th colunm3">23/06</td>
          </tr>
        </thead>

        <tbody className="tbody">
          <tr className="tr-tbody">
            <td className="colunm1">11:00</td>
            <td className="colunm1">Abertura</td>
            <td className="colunm2">12:00</td>
            <td className="colunm2">Meet and Greet</td>
            <td className="colunm3">12:00</td>
            <td className="colunm3">Concurso Cosplay</td>
          </tr>

          <tr>
            <td className="colunm1">12:00</td>
            <td className="colunm1">Atrações diversas</td>
            <td className="colunm2">13:00</td>
            <td className="colunm2">Atrações diversas</td>
            <td className="colunm3">13:00</td>
            <td className="colunm3">Atrações diversas</td>
          </tr>

          <tr>
            <td className="colunm1">14:00</td>
            <td className="colunm1">Atrações diversas</td>
            <td className="colunm2">14:00</td>
            <td className="colunm2">Atrações diversas</td>
            <td className="colunm3">14:30</td>
            <td className="colunm3">Atrações diversas</td>
          </tr>

          <tr>
            <td className="colunm1">15:00</td>
            <td className="colunm1">Atrações diversas</td>
            <td className="colunm2">15:30</td>
            <td className="colunm2">Atrações diversas</td>
            <td className="colunm3">16:00</td>
            <td className="colunm3">Atrações diversas</td>
          </tr>

          <tr className="th1">
            <td className="colunm1">16:30</td>
            <td className="colunm1">Atrações diversas</td>
            <td className="colunm2">16:00</td>
            <td className="colunm2">Atrações diversas</td>
            <td className="colunm3">17:00</td>
            <td className="colunm3">Atrações diversas</td>
          </tr>
        </tbody>

      </table>
    </section>
  );
}

export default Schedule;

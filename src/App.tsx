import { useState } from "react";
import "./App.css";

function App() {
  // let name = 'Chloe';
  // let name: string;
  let [name, setName] = useState<string>();
  let [lastname, setLastname] = useState<string>();
  let [cpf, setCpf] = useState<string>();
  let [idade, setIdade] = useState<number>();
  let [cep, setCep] = useState<string>();

  return (
    <>
      <section>
        <form action="submit">

          <fieldset>
            <label htmlFor="name">Nome:</label>
            <input name='name' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
          </fieldset>
          
          <fieldset>
            <label htmlFor="lastname">Sobrenome:</label>
            <input name='lastname' type="text" onChange={(e)=>setLastname(e.target.value)} value={lastname} />
          </fieldset>

          <fieldset>
            <label htmlFor="cpf">CPF:</label>
            <input name='cpf' type="text" onChange={(e)=>setCpf(e.target.value)} value={cpf} />
          </fieldset>

          <fieldset>
            <label htmlFor="age">Idade:</label>
            <input name='age' type="number" onChange={(e)=>setIdade(Number(e.target.value))} value={idade} />
          </fieldset>

          <fieldset>
            <label htmlFor="cep">CEP:</label>
            <input name='cep' type="text" onChange={(e)=>setCep(e.target.value)} value={cep} />
          </fieldset>

          <button type="submit">Enviar</button>

        </form>
      </section>
    </>
  );

}

export default App;

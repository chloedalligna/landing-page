import { useState } from "react";
import './style.css'

function Form() {
  // const name = 'Chloe';
  // const name: string;
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<number | string>('');

  return (
    <>
      <section id="section-form">

        <h2 className="h2-default">Inscreva-se na Nossa Newsletter!</h2>
        <p className="p-default">Receba atualizações exclusivas sobre o evento, descontos especiais e notícias em primeira mão.</p>
        
        <form action="submit">
          <fieldset className="fieldset-form">
            <label htmlFor="name">Nome:</label>
            <input
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="lastname">Sobrenome:</label>
            <input
              name="lastname"
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="cpf">CPF:</label>
            <input
              name="cpf"
              type="text"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
            />
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="age">E-mail:</label>
            <input
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {/* OU setIdade(+e.target.value) para converter string para number*/}
          </fieldset>

          <fieldset className="fieldset-form">
            <label htmlFor="cep">Telefone:</label>
            <input
              name="tel"
              type="number"
              onChange={(e) => setTel(Number(e.target.value))}
              value={tel}
            />
          </fieldset>

          <button className="button-default" type="submit">Enviar</button>
        </form>

        {/* Tag usada para manter mesma a estrutura de texto digitada */}
        {/* <pre>
        {`
          Seu nome é ${name}
          Seu sobrenome é ${lastname}
          Seu CPF é ${cpf}
          Sua idade é ${age}
          Seu CEP é ${cep}
        `}
        {"Seu nome é " + nome + ", que legal"}
        </pre> */}
       
        <div></div>
      </section>
    </>
  );
}

export default Form;

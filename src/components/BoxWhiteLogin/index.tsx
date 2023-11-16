import InputLogin from "../InputLogin";
import "./style.css";

const BoxWhiteLogin = () => {
  return (
    <div id="boxWhiteLogin">
      <h1 id="title-app">Agendamento de Ambientes Educacionais</h1>
      <button id="button-continuar">Continuar</button>
      <h2 id="title-login">Login</h2>
      <div id="boxWhiteLogin-gradient">
        <img
          id="art"
          src="public\art.png"
          alt="mulher com computador olhando calendário"
        />
      </div>
      <img id="logo-senai" src="public\logo-senai.png" alt="logomarca Senai" />
      <img
        id="art-mobile"
        src="public\art-mobile.png"
        alt="mulher com computador olhando calendário"
      />
      <InputLogin
        image={"public/icone-email-login.svg"}
        type={"email"}
        alt={"ícone input de email"}
        idImg={"img-input-login-email"}
        idInput={"input-login-email"}
      />
      <InputLogin
        image={"public/icone-password-login.png"}
        type={"password"}
        alt={"ícone input de senha"}
        idImg={"img-input-login-password"}
        idInput={"input-login-password"}
      />
    </div>
  );
};

export default BoxWhiteLogin;

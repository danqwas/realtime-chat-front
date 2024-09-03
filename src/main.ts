import './style.css'; // Importa el archivo de estilos

import { connectToServer } from './client';

// Configuración inicial de la vista
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input id="jwt-token" placeholder="Json Web Token" />
    <button id="btn-connect">Connect</button>

    <br/>
    <span id="server-status">offline</span>

    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`;

// Obtén los elementos del DOM
const jwtToken = document.querySelector<HTMLInputElement>("#jwt-token")!;
const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

// Configura el evento de clic para el botón de conexión
btnConnect.addEventListener("click", () => {
  const token = jwtToken.value.trim();

  if (token.length === 0) {
    return alert("Enter a valid JWT");
  }

  // Conecta al servidor usando el token JWT proporcionado
  connectToServer(token);
});

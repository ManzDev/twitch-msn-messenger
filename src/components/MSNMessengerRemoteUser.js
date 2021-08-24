import "./MSNMessengerHistoryChat.js";
import "./MSNMessengerAvatar.js";

class MSNMessengerRemoteUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
    .container {
      width: 100%;
      height: 92%;
      display: grid;
      grid-template-columns: 1fr 140px;
      margin: 4px 8px;
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MSNMessengerRemoteUser.styles}</style>
    <div class="container">
      <msn-messenger-history-chat></msn-messenger-history-chat>
      <msn-messenger-avatar image="msn"></msn-messenger-avatar>
    </div>`;
  }
}

customElements.define("msn-messenger-remote-user", MSNMessengerRemoteUser);

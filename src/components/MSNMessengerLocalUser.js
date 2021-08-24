import "./MSNMessengerAvatar.js";
import "./MSNMessengerChat.js";

class MSNMessengerLocalUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
    .container {
      width: 100%;
      height: 100%;
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
    <style>${MSNMessengerLocalUser.styles}</style>
    <div class="container">
      <msn-messenger-chat></msn-messenger-chat>
      <msn-messenger-avatar image="duck"></msn-messenger-avatar>
    </div>`;
  }
}

customElements.define("msn-messenger-local-user", MSNMessengerLocalUser);

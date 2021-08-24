class MSNMessengerHistoryChat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr;
        grid-template-rows: 28px 1fr;
        font-family: Verdana;
        font-size: 10px;
        width: 97%;
        height: 100%;
        border: 1px solid #586170;
        border-radius: 8px 8px 0 0;
        margin: 2px 1px;
      }

      .subject {
        border-radius: 8px 8px 0 0;
        background: #EEF0FD;
        display: flex;
        align-items: center;
        padding-left: 6px;
        border-bottom: 1px solid #586170;
      }

      .subject strong {
        padding-left: 3px;
      }

      .history {
        background: #fff;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MSNMessengerHistoryChat.styles}</style>
    <div class="container">
      <div class="subject">To: <strong>ManzDev (esemanztodoxulo@hotmail.com)</strong></div>
      <div class="history"></div>
    </div>`;
  }
}

customElements.define("msn-messenger-history-chat", MSNMessengerHistoryChat);

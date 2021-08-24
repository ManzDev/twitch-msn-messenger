class MSNMessengerStatusbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      .container {
        width: 100%;
        height: 14px;
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        border-top: 1px solid #505E67;
        background: #FDFDFF;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 8px;
      }

      .text {
        font-family: Verdana;
        font-size: 10px;
        font-weight: bold;
        color: navy;
      }

      .text a {
        color: black;
      }

      .text a:hover {
        color: darkred;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${MSNMessengerStatusbar.styles}</style>
    <div class="container">
      <div class="text">More content on <a href="https://manz.dev/">https://manz.dev/</a> and <a href="https://twitch.tv/ManzDev">Twitch</a>!</div>
    </div>`;
  }
}

customElements.define("msn-messenger-statusbar", MSNMessengerStatusbar);

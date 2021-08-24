class MSNMessengerAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        width: 114px;
        height: 114px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #586170;
        border-radius: 8px;
        position: relative;
      }

      .picture {
        width: 96px;
        height: 96px;
        border: 1px solid #586170;
        border-radius: 8px;
        transform: translateY(4px);
      }

      .down {
        border: 0;
        background: transparent;
        color: #4D5967;
        transform: scaleY(0.5);
        align-self: flex-end;
      }

      .expand {
        position: absolute;
        top: 4px;
        right: -9px;
      }
    `;
  }

  connectedCallback() {
    this.image = this.getAttribute("image") ?? "msn";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MSNMessengerAvatar.styles}</style>
    <div class="container">
      <img class="picture" src="avatars/${this.image}.png" alt="Avatar">
      <button class="down">⯆</button>
      <img class="expand" src="ui/expand-left.png" alt="expand arrow">
    </div>
    `;
  }
}

customElements.define("msn-messenger-avatar", MSNMessengerAvatar);

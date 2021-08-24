class TabButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        min-width: 25px;
        height: 18px;
        border: 1px solid #ABB0C6;
        border-top: 0;
        border-radius: 0 0 6px 6px;
        display: flex;
        justify-content: center;
        background: #EDF2F8;
      }

      :host([focus]) .container {
        background: #fff;
        border-bottom: 3px solid #E2C47B;
        border-top: 0;
        transform: translateY(-1px);
      }

      img {
        width: 16px;
        height: 16px;
      }
    `;
  }

  connectedCallback() {
    this.image = "tabs/" + this.getAttribute("image") + ".png";
    this.text = this.getAttribute("image");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TabButton.styles}</style>
    <div class="container">
      <img src="${this.image}" alt="${this.text}">
    </div>`;
  }
}

customElements.define("tab-button", TabButton);

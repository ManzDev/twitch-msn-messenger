class ImageButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      .container {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .text {
        font-family: Verdana;
        font-size: 10.5px;
        letter-spacing: -0.25px;
        color: #434C4B;
      }

      .text span {
        text-decoration: underline;
      }
    `;
  }

  connectedCallback() {
    this.image = "toolbar/" + this.getAttribute("image") + ".png";
    this.text = this.getAttribute("text") ?? "Sin texto";
    this.bind = this.getAttribute("bind");
    this.label = this.text.replace(this.bind, `<span>${this.bind}</span>`);
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${ImageButton.styles}</style>
    <div class="container">
      <img src="${this.image}" alt="${this.text}">
      <div class="text">${this.label}</div>
    </div>`;
  }
}

customElements.define("image-button", ImageButton);

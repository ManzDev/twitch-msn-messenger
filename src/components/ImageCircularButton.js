class ImageCircularButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      .container {
        width: var(--size, 16px);
        height: var(--size, 16px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(ui/small-circle-button.png) no-repeat;
        background-size: cover;
      }

      .container img {
        width: var(--image-size, 11px);
        height: var(--image-size, 11px);
      }
    `;
  }

  connectedCallback() {
    this.text = this.getAttribute("image") ?? "notext";
    this.image = "toolbar/small-" + this.text + ".png";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${ImageCircularButton.styles}</style>
    <div class="container">
      <img src="${this.image}" alt="${this.text}">
    </div>`;
  }
}

customElements.define("image-circular-button", ImageCircularButton);

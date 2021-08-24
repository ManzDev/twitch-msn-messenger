class SimpleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      .container {
        display: flex;
        align-items: center;
        padding: 0 6px;
        height: 100%;
      }

      .container img {
        height: 16px;
      }

      .container span:not(:empty) {
        font-family: Verdana;
        font-size: 10px;
        color: #444;
        display: inline-block;
        width: 50px;
        padding-left: 3px;
      }

      .container button {
        border: 0;
        background: transparent;
        transform: scale(0.6);
        padding: 0;
      }
    `;
  }

  onClick() {
    if (this.text === "nudge") {
      this.dispatchEvent(new CustomEvent("nudge", { bubbles: true, composed: true }));
    }
  }

  connectedCallback() {
    this.image = "simple/" + this.getAttribute("image") + ".png";
    this.text = this.getAttribute("image");
    this.label = this.getAttribute("label") ?? "";
    this.arrowButton = this.hasAttribute("arrow") ? "<button>⯆</button>" : "";
    this.render();
    this.shadowRoot.querySelector(".container img").addEventListener("click", () => this.onClick());
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${SimpleButton.styles}</style>
    <div class="container">
      <img src="${this.image}" alt="${this.text}">
      <span>${this.label}</span>
      ${this.arrowButton}
    </div>`;
  }
}

customElements.define("simple-button", SimpleButton);

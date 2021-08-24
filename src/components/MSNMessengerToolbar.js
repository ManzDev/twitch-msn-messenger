import "./ImageCircularButton.js";
import "./ImageButton.js";

class MSNMessengerToolbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      .container {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius) var(--border-radius) 0 0;

        display: grid;
        grid-template-columns: 310px 1fr;
        position: relative;
      }

      .toolbar-container {
        display: grid;
        grid-template-columns: 40px 56px 44px 40px 54px 44px;
        justify-content: flex-end;
        align-items: center;
        background: url(ui/toolbar-background.png) repeat;
        background-size: contain;
      }

      .toolbar-small-container {
        display: grid;
        grid-template-columns: 50px 50px 37px 28px;
        height: 100%;
      }

      .toolbar-small-container .left {
        background: url(ui/small-toolbar-left-background.png) no-repeat;
      }

      .toolbar-small-container .center {
        background:
          url(ui/msn-logo.png) top left 4px,
          url(ui/small-toolbar-center-background.png);
        background-repeat: no-repeat, repeat-x;
      }

      .toolbar-small-container .right {
        background: url(ui/small-toolbar-right-background.png) no-repeat;
      }

      .toolbar-small-container .end {
        background: url(ui/small-toolbar-end-background.png) repeat;
      }

      .center .buttons {
        display: flex;
        gap: 0 4px;
        transform: translate(2px, 23px);
      }

      .center image-circular-button {
        --size: 19px;
        --image-size: 13px;
      }

      .up-down {
        --image-size: 15px;

        position: absolute;
        top: 2px;
        left: 2px;
      }

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${MSNMessengerToolbar.styles}</style>
    <div class="container">
      <div class="toolbar-container">
        <image-circular-button class="up-down" image="up-down"></image-circular-button>
        <image-button image="invite" text="Invite" bind="I"></image-button>
        <image-button image="send" text="Send Files" bind="l"></image-button>
        <image-button image="video" text="Video" bind="o"></image-button>
        <image-button image="voice" text="Voice" bind="c"></image-button>
        <image-button image="activities" text="Activities" bind="v"></image-button>
        <image-button image="games" text="Games" bind="G"></image-button>
      </div>
      <div class="toolbar-small-container">
        <div class="left"></div>
        <div class="center">
          <div class="buttons">
            <image-circular-button image="block"></image-circular-button>
            <image-circular-button image="paint"></image-circular-button>
          </div>
        </div>
        <div class="right"></div>
        <div class="end"></div>
      </div>
    </div>`;
  }
}

customElements.define("msn-messenger-toolbar", MSNMessengerToolbar);

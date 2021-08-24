import "./SimpleButton.js";
import "./TabButton.js";

class MSNMessengerChat extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        display: grid;
        grid-template-rows: 24px 1fr 24px;
        min-height: 122px;
        background: #fff;
        width: 97%;
        border: 1px solid #586170;
        border-radius: 6px;
      }

      .actionbar,
      .tabs {
        background: linear-gradient(#D8E8F7, #F5F2F9, #D8E8F7);
      }

      .actionbar {
        border-bottom: 1px solid #586170;
        border-radius: 6px 6px 0 0;
        display: flex;
      }
      .tabs {
        border-top: 1px solid #565F70;
        border-radius: 0 0 6px 6px;
        display: flex;
        justify-content: flex-end;
        padding-right: 12px;
      }

      .chat {
        display: flex;
        justify-content: flex-end;
        margin: 3px;
      }

      .chat .buttons {
        display: flex;
        flex-direction: column;
        gap: 3px 0;
      }

      .normal {
        border: 1px solid #93989C;
        background: #FBFBFB;
        box-shadow: -4px -4px 4px #C0C9E0 inset;
        width: 58px;
        height: 37px;
        border-radius: 5px;
        font-family: Tahoma;
        font-weight: bold;
        font-size: 11px;
        color: #969C9A;
      }

      .normal span {
        text-decoration: underline;
      }

      .normal.small {
        height: 25px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MSNMessengerChat.styles}</style>
    <div class="container">
      <div class="actionbar">
        <simple-button image="letter"></simple-button>
        <simple-button image="happy" arrow></simple-button>
        <simple-button image="voice-clip" label="Voice clip"></simple-button>
        <simple-button image="wink" arrow></simple-button>
        <simple-button image="mountain" arrow></simple-button>
        <simple-button image="gift" arrow></simple-button>
        <simple-button image="nudge"></simple-button>
      </div>
      <div class="chat">
        <div class="buttons">
          <button class="normal"><span>S</span>end</button>
          <button class="small normal">Sea<span>r</span>ch</button>
        </div>
      </div>
      <div class="tabs">
        <tab-button image="paint"></tab-button>
        <tab-button image="letter" focus></tab-button>
      </div>
    </div>`;
  }
}

customElements.define("msn-messenger-chat", MSNMessengerChat);

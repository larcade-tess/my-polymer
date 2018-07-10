class XCustom extends PolymerElement {
  static get template(){
    return html`
      <button on-click="handleClick">Kick Me</button>
    `;
  }
  handleClick() {
    console.log('Ow!');
  }
}
customElements.define('x-custom', XCustom);

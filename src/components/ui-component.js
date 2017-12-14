import { merge } from '../util';

export default class UIComponent extends HTMLElement {
  static get tagName() {
    throw new Error('UIComponent is abstract class');
    return 'ui-component';
  }

  static get observedAttributes() {
    return [];
  }

  get initialState() {
    return {};
  }

  beforeMount() {}

  constructor() {
    super();
    this.state = this.initialState;
    this.beforeMount();
    this.attachShadow({ mode: 'open' });
    this.oldVnode = document.createElement('div');
    this.shadowRoot.appendChild(this.oldVnode);
    this.update();
  }

  render() {
    const { h } = window.asmDom;
    return h('div', {}, 'ui-component');
  }

  update(state) {
    merge(this.state, state);
    const { patch } = window.asmDom;
    const vnode = this.render();
    patch(this.oldVnode, vnode);
    this.oldVnode = vnode;
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}
  adoptedCallback(oldDocument, newDocument) {}
}
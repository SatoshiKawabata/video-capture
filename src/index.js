import init from 'asm-dom';
import WebComponent from './components/web-component';
customElements.define('web-component', WebComponent);

init({
  unsafePatch: true
}).then(asmDom => {
  const { h, patch } = asmDom;
  const root = document.getElementById('root');
  const vnode = h('web-component', {}, []);
  patch(root, vnode);
});
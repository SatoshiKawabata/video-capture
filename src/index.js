import init from 'asm-dom';
import { define } from './util';
import AppContainer from './components/app-container';
define(AppContainer);
import VideoContainer from './components/video-container';
define(VideoContainer);

init({
  unsafePatch: true
}).then(asmDom => {
  const { h, patch } = asmDom;
  const root = document.getElementById('root');
  const vnode = h('app-container', {}, []);
  patch(root, vnode);
});
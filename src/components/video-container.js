import UIComponent from './ui-component';

export default class VideoContainer extends UIComponent {
  static get tagName() {
    return 'video-container';
  }

  static get observedAttributes() {
    return [
      'infos'
    ];
  }

  get initialState() {
    return { infos: [] };
  }

  getFrameUrls(w = null, h = null) {
    return new Promise((res, rej) => {
      const videos = this.shadowRoot.querySelectorAll('video');
      const l = videos.length;
      const infos = [];
      for (let i = 0; i < l; i++) {
        const v = videos[i];
        const c = document.createElement('canvas');
        const name = this._cutExtension(v.name);
        c.width = w ? w : v.videoWidth;
        c.height = h ? h : v.videoHeight;
        c.getContext("2d").drawImage(v, 0, 0, c.width, c.height);
        c.toBlob(b => {
          const url = URL.createObjectURL(b);
          infos.push({ url, name });
          if (infos.length === l) {
            res(infos);
          }
        });
      }
    });
  }

  _cutExtension(str) {
    const sp = str.split('.');
    return sp[0];
  }

  render() {
    const { h } = window.asmDom;
    const { infos } = this.state;
    const videos = this.state.infos.map(info => {
      return h('video', {
        raw: {
          controls: true,
          src: info.src,
          name: info.name
        }
      });
    });
    return h('div', {}, videos);
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    if (attributeName === 'infos') {
      const infos = JSON.parse(newValue);
      this.update({infos});
    }
  }
}
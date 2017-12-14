export default class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.state = {
      urls: []
    };
    this.attachShadow({ mode: 'open' });
    this.oldVnode = document.createElement('div');
    this.shadowRoot.appendChild(this.oldVnode);
    this.update();
  }

  render() {
    const { h } = window.asmDom;
    const { urls } = this.state;
    const videos = this.state.urls.map(url => {
      return h('video', {
        raw: {
          controls: true,
          src: url
        }
      });
    });

    return h('div', {}, [
      h('input', {
        raw: {
          type: 'file',
          multiple: true,
          accept: 'video/*',
          onchange: e => {
            const { files } = this.shadowRoot.querySelector('input');
            const urls = [];
            for (let i = 0; i < files.length; i++) {
              urls.push(URL.createObjectURL(files[i]));
            }
            this.update({
              urls
            });
          }
        }
      }),
      h('button', {
        raw: {
          disabled: videos.length === 0,
          onclick: () => {
            const videos = this.shadowRoot.querySelectorAll('video');
            for (let i = 0; i < videos.length; i++) {
              const canvas = document.createElement('canvas');
              canvas.getContext("2d").drawImage(videos[i], 0, 0, videos[i].videoWidth, videos[i].videoHeight);
              canvas.toBlob(b => {
                const url = URL.createObjectURL(b);
              });
            }
          }
        },
      }, ['書き出し']),
      h('div', {}, videos)
    ]);
  }

  update(state = {}) {
    this.merge(this.state, state);
    const { patch } = window.asmDom;
    const vnode = this.render();
    patch(this.oldVnode, vnode);
    this.oldVnode = vnode;
  }

  merge(origin, diff) {
    for (let k in diff) {
        if (!diff[k] || this.isPrimitive(diff[k])) {
            origin[k] = diff[k];
        } else if (diff[k].constructor === Object) {
            if (!origin[k]) {
                origin[k] = {};
            }
            this.merge(origin[k], diff[k]);
        } else if (diff[k].constructor === Array) {
            if (!origin[k]) {
                origin[k] = [];
            }
            this.merge(origin[k], diff[k]);
        }
    }
  }

  typeEquals(type, target) {
    const clas = Object.prototype.toString.call(target).slice(8, -1);
    return clas === type;
  }

  isPrimitive(a) {
    return this.typeEquals("Number", a) || this.typeEquals("Boolean", a) || this.typeEquals("String", a);
  }
}
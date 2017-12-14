import UIComponent from './ui-component';

export default class AppContainer extends UIComponent {
  static get tagName() {
    return 'app-container';
  }

  constructor() {
    super();
  }

  beforeMount() {
    this._onChangeFiles = this._onChangeFiles.bind(this);
    this._onClickExport = this._onClickExport.bind(this);
  }

  get initialState() {
    return {
      videoInfos: [],
      frameInfos: []
    };
  }

  render() {
    const { h } = window.asmDom;
    const { videoInfos, frameInfos } = this.state;
    const links = frameInfos.map(info => {
      return h('a', {
        raw: {
          href: info.url,
          download: info.name
        }
      }, [info.name]);
    });

    return h('div', {}, [
      h('input', {
        raw: {
          id: 'file-loader',
          type: 'file',
          multiple: true,
          accept: 'video/*',
          onchange: this._onChangeFiles
        }
      }),
      h('div', {}, [
        h('p', {}, '書き出しサイズ'),
        h('label', {}, 'width'),
        h('input', {
          raw: {
            type: 'number',
            id: 'width-input'
          }
        }),
        h('label', {}, 'height'),
        h('input', {
          raw: {
            type: 'number',
            id: 'height-input'
          }
        }),
        h('button', {
          raw: {
            disabled: videoInfos.length === 0,
            onclick: this._onClickExport
          },
        }, ['ダウンロードリンク生成']),
      ]),
      h('div', {}, ...links),
      h('video-container', { infos: JSON.stringify(videoInfos) }),
    ]);
  }

  _onChangeFiles() {
    const { files } = this.shadowRoot.querySelector('#file-loader');
    const videoInfos = [];
    for (let i = 0; i < files.length; i++) {
      videoInfos.push({
        src: URL.createObjectURL(files[i]),
        name: files[i].name
      });
    }
    this.update({
      videoInfos
    });
  }

  _onClickExport() {
    const vc = this.shadowRoot.querySelector('video-container');
    const w = Number(this.shadowRoot.querySelector('#width-input').value);
    const h = Number(this.shadowRoot.querySelector('#height-input'));
    vc.getFrameUrls(w, h).then(frameInfos => {
      this.update({ frameInfos });
    });
  }
}
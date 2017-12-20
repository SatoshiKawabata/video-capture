export const ACTIONS = {
  FUGA: 'fuga',
  UPDATE_VIDEO_INFOS: 'add-video-infos',
  UPDATE_EXPORT_CONFIG: 'update-export-config',
  GET_VIDEO_FRAME: 'get-video-frame',
  EXPORT: 'export',
};
export default class ActionCreator {
  static fuga() {
    return {
      type: ACTIONS.FUGA,
    };
  }

  static updateVideoInfos(videoInfos: {}) {
    return {
      type: ACTIONS.UPDATE_VIDEO_INFOS,
      videoInfos,
    };
  }

  static updateExportConfig(exportConfig: {}) {
    return {
      type: ACTIONS.UPDATE_EXPORT_CONFIG,
      exportConfig,
    };
  }

  static export() {
    return {
      type: ACTIONS.UPDATE_EXPORT_CONFIG,
    };
  }

  static getVideoFrame() {
    return {
      type: ACTIONS.GET_VIDEO_FRAME,
    };
  }
}
import { VideoInfo, ExportConfig } from './Models';
export const ACTIONS = {
  FUGA: 'fuga',
  UPDATE_VIDEO_INFOS: 'add-video-infos',
  UPDATE_EXPORT_CONFIG: 'update-export-config',
};
export default class ActionCreator {
  static fuga() {
    return {
      type: ACTIONS.FUGA,
    };
  }

  static updateVideoInfos(videoInfos: VideoInfo[]) {
    return {
      type: ACTIONS.UPDATE_VIDEO_INFOS,
      videoInfos,
    };
  }

  static updateExportConfig(exportConfig: ExportConfig) {
    return {
      type: ACTIONS.UPDATE_EXPORT_CONFIG,
      exportConfig,
    };
  }
}
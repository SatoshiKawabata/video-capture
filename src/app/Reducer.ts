import { Model } from './Models';
import { ACTIONS } from './ActionCreator';

const initialState: Model = {
  fuga: 1,
  videoInfos: [],
  exportConfig: {
    width: 0,
    height: 0,
    name: '',
  },
  isExporting:  false,
};

const Reducer = (state = initialState, action) => {
  /* tslint:disable:no-console */
  console.log('reduce', action, state);
  const newState: Model = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ACTIONS.FUGA:
      newState.fuga++;
      break;
    case ACTIONS.UPDATE_VIDEO_INFOS:
      newState.videoInfos = action.videoInfos;
      break;
    case ACTIONS.UPDATE_EXPORT_CONFIG:
      newState.exportConfig = Object.assign({}, newState.exportConfig, action.exportConfig);
      break;
    case ACTIONS.EXPORT:
    // image from video
    newState.isExporting = true;
      break;
    case ACTIONS.EXPORT_END:
    // image from video
    newState.isExporting = false;
      break;
    default:
      break;
  }
  return newState;
};

export default Reducer;

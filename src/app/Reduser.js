import { ACTIONS } from './ActionCreator';

const initialState = {
  fuga: 1,
  videoInfos: [], // { src, name }
  exportConfig: {
    width: 0,
    height: 0,
    name: null,
  },
};

const Reducer = (state = initialState, action) => {
  console.log('reduce', action, state);
  const newState = JSON.parse(JSON.stringify(state));

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
      break;
  }
  return newState;
}

export default Reducer;

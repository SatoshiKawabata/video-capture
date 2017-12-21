import { EventEmitter } from 'events';
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
  eventEmitter: new EventEmitter(),
};

const Reducer = (state = initialState, action) => {
  /* tslint:disable:no-console */
  console.log('reduce', action, state);
  const newState: Model = Object.assign({}, state);

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
    default:
      break;
  }
  return newState;
};

export default Reducer;

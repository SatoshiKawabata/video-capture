export const ACTIONS = {
  FUGA: 'fuga',
};
export default class ActionCreator {
  static fuga() {
    return {
      type: ACTIONS.FUGA,
    };
  }
}
import * as types from './mutation-types';

export default {
  [types.UPDATE_FOO](state, payload) {
    state.foo = payload;
  },
  LIKE_INC(state) {
    state.likes++;
  },
  LIKE_DEC(state) {
    state.likes--;
  },
  LIKE_NULL(state) {
    state.likes = 0;
  },
  SET_TIMEOUT(state, payload) {
    state.timeout = payload;
  },
  SET_POPUPS(state, count) {
    state.popups = count;
  },
};

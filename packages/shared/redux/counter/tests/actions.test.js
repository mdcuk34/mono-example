import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../actions';
import * as types from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('incrementAsync', () => {
  it('creates two SET_CUSTOM_VALUEs with loading and result', async () => {
    const expectedActions = [
      { type: types.SET_CUSTOM_VALUE, payload: 'loading...' },
      { type: types.SET_CUSTOM_VALUE, payload: 1 },
    ];
    const store = mockStore({ counter: { count: 0 } });
    await store.dispatch(actions.incrementAsync());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

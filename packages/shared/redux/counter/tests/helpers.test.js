import { incrementAsync } from '../helpers';

describe('incrementAsync', () => {
  it('resolves the count + 1', () => {
    return expect(incrementAsync(0)).resolves.toEqual(1);
  });
});

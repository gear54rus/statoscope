import stats from '../../../test/bundles/simple/stats-prod.json';
import convert from './modules-to-foam-tree';
import { NormalizedModule } from './normalize';

test('should work', () => {
  const modules = stats.modules;

  expect(convert(modules as unknown as NormalizedModule[])).toMatchSnapshot();
});

import mock, { proxy } from 'xhr-mock';
import features from './features';
import regions from './regions';
import notifications from './notifications';
import axiUserPermissions from './axi-user-permissions';
import appeals from './appeals';
import slotmachine from './slotmachine';
import me from './me';
import settings from './settings';

mock.setup();

features(mock);

notifications(mock);

axiUserPermissions(mock);

regions(mock);

appeals(mock);

slotmachine(mock);

me(mock);

settings(mock);

// keep this last
mock.use(proxy);

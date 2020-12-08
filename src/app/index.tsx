import * as React from 'react';
import { History } from 'history';
import { hot } from 'react-hot-loader/root';
import { Router, Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog as farCog,
  faSave as farSave,
  faEdit as farEdit,
  faHome as farHome,
  faTrashAlt as farTrashAlt,
  faTimes as farTimes,
  faUsers as farUsers,
  faPowerOff as farPowerOff,
  faSlidersV as farSlidersV,
  faDraftingCompass as farDraftingCompass,
  faGripLinesVertical as farGripLinesVertical,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faCaretDown as fasCaretDown,
} from '@fortawesome/pro-solid-svg-icons';
import {
  faPlus as falPlus,
} from '@fortawesome/pro-light-svg-icons';
import { SnackbarProvider } from 'notistack';
import { StoreProvider } from './stores';
import { SnackbarUtilsConfigurator } from './util';
import { InventoryPage } from './containers/InventoryPage';

library.add(
  farCog,
  farSave,
  farEdit,
  farHome,
  falPlus,
  farTimes,
  farTrashAlt,
  farUsers,
  farPowerOff,
  farSlidersV,
  fasCaretDown,
  farDraftingCompass,
  farGripLinesVertical,
);

export interface AppProps {
  history: History<any>;
}

export const Application = hot(({ history }) => {
  return (
    <StoreProvider>
      <SnackbarProvider>
        <Router history={history}>
          <Switch>
            <Redirect exact from="/" to="/inventory" />
            <Route path="/inventory" component={InventoryPage} />
          </Switch>
        </Router>
        <SnackbarUtilsConfigurator />
      </SnackbarProvider>
    </StoreProvider>
  );
});

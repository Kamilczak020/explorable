// See https://github.com/mobxjs/mobx-react-lite/#observer-batching
import 'mobx-react-lite/batchingForReactDom';

import { Application } from './app';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const history = createBrowserHistory();
ReactDOM.render(<Application history={history} />, document.getElementById('root'));

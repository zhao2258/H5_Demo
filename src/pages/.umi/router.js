import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    redirect: '/home',
    exact: true,
    _title: 'h55',
    _title_default: 'h55',
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index'),
        })
      : require('../../layouts/index').default,
    routes: [
      {
        path: '/home',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__home" */ '../home'),
            })
          : require('../home').default,
        exact: true,
        _title: 'h55',
        _title_default: 'h55',
      },
      {
        path: '/detail',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__detail" */ '../detail'),
            })
          : require('../detail').default,
        exact: true,
        _title: 'h55',
        _title_default: 'h55',
      },
      {
        path: '/about',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__about" */ '../about'),
            })
          : require('../about').default,
        exact: true,
        _title: 'h55',
        _title_default: 'h55',
      },
      {
        path: '/me',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import(/* webpackChunkName: "p__me" */ '../me'),
            })
          : require('../me').default,
        exact: true,
        _title: 'h55',
        _title_default: 'h55',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/zy/Desktop/test_Demo/h55/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'h55',
        _title_default: 'h55',
      },
    ],
    _title: 'h55',
    _title_default: 'h55',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/zy/Desktop/test_Demo/h55/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'h55',
    _title_default: 'h55',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}

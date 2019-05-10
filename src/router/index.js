const _import = require('./_import_' + process.env.NODE_ENV)

const routeConfig =  [
  { path: '/',
    component: _import('app/App'),
    indexRoute: { component: _import('app/App')}
  }
]
export default routeConfig;

const _import = require("./_import_" + process.env.NODE_ENV);

const routeConfig = [
  {
    path: "/ReactRudexDemo",
    component: _import("web/ReactRudexDemo/index"),
    indexRoute: { component: _import("web/ReactRudexDemo/index") }
  },
  {
    path: "/Comment",
    component: _import("web/Comment/index"),
    indexRoute: { component: _import("web/Comment/index") }
  },
  {
    path: "",
    component: _import("web/entry/index"),
    indexRoute: { component: _import("web/entry/index") }
  }
];
export default routeConfig;

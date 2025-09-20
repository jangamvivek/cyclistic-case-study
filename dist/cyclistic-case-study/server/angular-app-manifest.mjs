
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5256, hash: '64e5ce787886b34a87be4bc4fca73718085028bacf709870cff98acb43753093', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1229, hash: '768400ac2cbb58d20f6f7189efaad76056591dd7c10bc8923a9913d5bb163300', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22276, hash: '687b4982c4fc64529bf773fa44cdb5bf3793382625245d4eb1b2c1486acc78f2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 14209, hash: '88e5d0ba912870d9a404c65020995673b0e8264e1a75f24a15ea5ce2bc458e2d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};

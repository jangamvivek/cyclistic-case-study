
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jangamvivek.github.io/cyclistic-case-study/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/cyclistic-case-study/home",
    "route": "/cyclistic-case-study"
  },
  {
    "renderMode": 2,
    "route": "/cyclistic-case-study/home"
  },
  {
    "renderMode": 2,
    "route": "/cyclistic-case-study/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5306, hash: 'dccc76a324787bed51c58b57555068be7ac153e04da7d20b25473c1b13f655c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1279, hash: 'a86a0084b64031409d464f3e3a97fd71bf4376ea53291b776705ff9894143bac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 14259, hash: '863d435a19a81b046ea45e11667fafdedff557dacb6852a24b245de532850945', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22326, hash: '2b6b862a4deaf50546ba725618ea404f951fd6d4c8918dd6f527ec0efea50a54', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};

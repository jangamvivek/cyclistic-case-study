
export default {
  basePath: 'https://jangamvivek.github.io/cyclistic-case-study',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

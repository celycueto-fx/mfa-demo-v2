const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'appProducts',


/*   exposes: {
    './Component': './projects/app-products/src/app/app.component.ts',
  }, */

  exposes: {
    './Component': './projects/app-products/src/app/app.component.ts',
    './routes': './projects/app-products/src/app/app.routes.ts',
  },
  //"./routes": "./projects/app-products-remote/src/app/app.routes.ts",
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});

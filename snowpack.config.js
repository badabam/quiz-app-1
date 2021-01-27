// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

// snowpack.config.js
// Example: Using Snowpack's built-in bundling support

module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
}

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: `/`,

    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}

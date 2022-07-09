module.exports = {
  apps: [
    {
      name: 'miasistente-nuxt',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        PORT: 8087,
      },
    },
  ],
};

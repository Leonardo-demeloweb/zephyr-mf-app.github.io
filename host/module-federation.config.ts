export const mfConfig = {
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:8081/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^18.2.0', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^18.2.0', eager: true },
  },
};

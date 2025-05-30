export const mfConfig = {
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Widget': './src/components/Widget.tsx',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^18.2.0', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^18.2.0', eager: true },
  },
};

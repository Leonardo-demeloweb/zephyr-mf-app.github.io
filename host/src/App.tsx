import React, { Suspense } from 'react';
const RemoteWidget = React.lazy(() => import('remote/Widget'));

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🏠 Host App</h1>
      <Suspense fallback={<div>Loading remote widget...</div>}>
        <RemoteWidget />
      </Suspense>
    </div>
  );
};

export default App;

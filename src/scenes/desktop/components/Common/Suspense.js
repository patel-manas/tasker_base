import React, { Suspense } from 'react';

export default function SuspenseComponent(Component) {
  //Loader Componenet to be added
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

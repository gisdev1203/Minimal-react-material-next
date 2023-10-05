import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));

export const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
export const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
export const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
export const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
export const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
export const PageSix = Loadable(lazy(() => import('../pages/PageSix')));

export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

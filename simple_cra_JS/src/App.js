// i18n
import './locales/i18n';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// locales
import ThemeLocalization from './locales';
// components
import SnackbarProvider from './components/snackbar';
import { ThemeSettings, SettingsProvider } from './components/settings';
import { MotionLazyContainer } from './components/animate';
import ScrollToTop from './components/scroll-to-top';

// Check our docs
// https://docs.minimals.cc/authentication/js-version

import { AuthProvider } from './auth/JwtContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <MotionLazyContainer>
              <ThemeProvider>
                <ThemeSettings>
                  <ThemeLocalization>
                    <SnackbarProvider>
                      <Router />
                    </SnackbarProvider>
                  </ThemeLocalization>
                </ThemeSettings>
              </ThemeProvider>
            </MotionLazyContainer>
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
    </AuthProvider>
  );
}

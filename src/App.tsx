import * as React from 'react';

import CountriesProvider from './contexts/countries';
import Header from './components/header';
import Layout from './components/layout';

import './styles.scss';
import ThemeProvider from './contexts/theme';
import Theme from './components/theme';

const App:React.FC = () => {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <Theme>
            <main>
                <Header />
                <Layout />    
            </main>
        </Theme>
      </CountriesProvider>
    </ThemeProvider>  
  )
};

export default App;

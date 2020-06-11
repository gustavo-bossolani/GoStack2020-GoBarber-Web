import React from 'react';

import GlobalStyle from './styles/global';
import SigIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
      {/* <SignUp /> */}
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { DarkmodeProvider, useDarkmodeContext } from '../contexts/DarkmodeContext';
import { dark } from '../styles';

// import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
// import { queryClient } from '../services/queryClient';
// import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps)  {
  return (
    // <AuthProvider> 
    // <QueryClientProvider client={queryClient}>
    <DarkmodeProvider>
    <ChakraProvider theme={dark}>
    <SidebarDrawerProvider>
      <Component {...pageProps} />
    </SidebarDrawerProvider> 
    </ChakraProvider>
    </DarkmodeProvider>
    // </QueryClientProvider>
    // </AuthProvider> 
  );
}

export default MyApp;

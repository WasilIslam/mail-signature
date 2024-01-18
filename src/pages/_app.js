import { AuthProvider } from '@/functions/contexts/userContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

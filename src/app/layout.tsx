import "./globals.css";
import { Toaster } from 'react-hot-toast';

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        
        <html lang="en">
          <body>{children}</body>
        </html>
        <Toaster position="top-center" reverseOrder={false} />
      </>
      
    );
  }
  
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Academia Keinner",
  description: "La mejor academia del mundo ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
     <html lang="en">
       <body
         className={`${spaceGrotesk.variable} antialiased`}
       >
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <main className="flex-1">

              {children}
            </main>
       </body>
     </html>
    </ClerkProvider>
  );
}

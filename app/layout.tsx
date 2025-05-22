import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./(routes)/(root)/components";

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
         <SidebarProvider>
          <AppSidebar />
            <main className="flex-1">
              {children}
            </main>
         </SidebarProvider>   
       </body>
     </html>
    </ClerkProvider>
  );
}

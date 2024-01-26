import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: '가상 부동산',
    description: "Generated by create next app",
}

export default function RootLayout( { children }: Readonly<{ children: React.ReactNode }> ) {
    return (
        <html lang="en">
            <body>
                { children }
            </body>
        </html>
    )
}

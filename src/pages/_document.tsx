import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* bg-gradient-to-t to-stone-100 via-teal-100/50 from-stone-400/50 */}
      <body className="min-h-screen bg-slate-50 mx-7">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

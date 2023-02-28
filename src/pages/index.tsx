import Head from 'next/head'

import Container from '@/components/container'
import PageBody from '@/components/pageBody'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Scratchpad</title>
        <meta name="description" content="A personal site and playground for Matthew Taylor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <PageBody>
          <h1 className="text-lg font-bold">Test</h1>
          <p className="my-2">
            This is a site to dump miscellaneous things in. 
            Right now, some of those things are some endpoints to generate useful tabletop RPG data, a WIP digital cookbook, and a resume.
          </p>
          <p className="my-2">Foo.</p>
          
        </PageBody>
      </Container>
      {/* <div><h1 className="text-center">Matthew's Site</h1></div>
      <Link href="/recipes">recipes</Link>
      <Link href="/resume">resume</Link>
      <Link href="/foo">foo</Link> */}
    </>
  )
}

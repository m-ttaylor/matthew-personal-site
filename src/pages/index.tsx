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
          <h1 className="text-lg font-bold">Home Page</h1>
          <p className="my-2">
            Welcome!
          </p>
          <p className="my-2">
            This site is a dumping ground/workspace for various data, projects, apps, and APIs. Right now, some of those things are a WIP digital cookbook and a passphrase generator.
          </p>
        </PageBody>
      </Container>
    </>
  )
}

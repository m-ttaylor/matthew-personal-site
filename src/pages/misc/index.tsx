import Container from "@/components/container";
import PageBody from "@/components/pageBody";
import Head from "next/head";
import Link from "next/link";

const Misc = () => {
  return (
    <>
      <Head>
        <title>Misc</title>
        <meta name="description" content="Misc. projects" />
      </Head>
      <Container>
        <PageBody>
          <h1 className="text-lg font-bold">Assorted Projects</h1>
          <p className="my-2">
            <Link className="text-sky-600 hover:underline" href="/misc/generator">Passphrase Generator</Link> - a client side passphrase generation tool a la <a className="text-sky-600 hover:underline" href="https://xkcd.com/936/"> xkcd </a>
          </p>

        </PageBody>
      </Container>
    </>
  );
}
export default Misc;
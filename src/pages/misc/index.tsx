import Container from "@/components/container";
import PageBody from "@/components/pageBody";
import Link from "next/link";
import { useState } from "react";

const Misc = () => {
  return (
    <Container>
      <PageBody>
      <h1 className="text-lg font-bold">Assorted Projects</h1>
      <p className="my-2">
        <Link className="text-sky-600 hover:underline" href="/misc/generator">Passphrase Generator</Link> - a client side passphrase generation tool a la <a className="text-sky-600 hover:underline" href="https://xkcd.com/936/"> xkcd </a>
      </p>
     
      </PageBody>
    </Container>
  );
}
export default Misc;
import Container from "@/components/container";
import PageBody from "@/components/pageBody";
import Link from "next/link";
import { useState } from "react";

const Misc = () => {
  return (
    <Container>
      <PageBody>
      <h1 className="text-lg font-bold">Section Pending</h1>
      <p className="my-2">
        Filler.
      </p>
      <Link className="text-sky-600" href="/misc/generator">Passphrase Generator</Link>
      </PageBody>
    </Container>
  );
}
export default Misc;
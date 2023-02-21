import { GetStaticProps, NextPage } from "next";

import Container from "@/components/container";
import resume from "@/resume.md";
import { getMarkdownAsHtml } from "@/lib/markdown";


interface ResumeProps {
  resume: string
}
export const getStaticProps: GetStaticProps<ResumeProps> = async (context) => {

  const resumeHtml = await getMarkdownAsHtml(resume);

  return {
    props: {
      resume: resumeHtml
    },
  }
}

const RecipesPage: NextPage<ResumeProps> = ({resume}: ResumeProps) => {

  return (
    <Container>
      <div className="w-full max-w-3xl mt-4 mx-auto mb-6">
        <article className="prose" dangerouslySetInnerHTML={{ __html: resume }}></article>
      </div>
    </Container>
  );
}


export default RecipesPage;
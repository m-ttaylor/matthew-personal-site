import { GetStaticProps, NextPage } from "next";

import Container from "@/components/container";
import resume from "@/resume.md";
import { getMarkdownAsHtml } from "@/lib/markdown";
import PageBody from "@/components/pageBody";


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
      <PageBody>
        <div>
        <article className="prose lg:prose-base md:prose-base sm:prose-sm mx-2 text-justify" dangerouslySetInnerHTML={{ __html: resume }}></article>
        </div>
      </PageBody>
    </Container>
  );
}


export default RecipesPage;
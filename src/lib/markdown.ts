import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownAsHtml(markdown: string) {

  const processedContent = await remark()
    .use(html)
    .process(markdown);
  const contentHtml = processedContent.toString();

  return contentHtml;
}

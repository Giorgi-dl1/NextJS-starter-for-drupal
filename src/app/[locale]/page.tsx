import { fetchPage } from "../../../api";
import ParagraphContainer from "@/components/containers/ParagraphContainer";

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: HomePageProps) {
  const { data: pageData } = (
    await fetchPage("411501ac-caad-4c72-8ffb-36f153e8e8f9", locale)
  ).data;

  return (
    <main>
      <ParagraphContainer paragraphs={pageData.relationships.field_elemente} />
    </main>
  );
}

"use client";

import { Fieldelemente, ParagraphData } from "@/types";
import TextAkkordeon from "../paragraphs/textAkkordeon/TextAkkordeon";

interface ParagraphContainerProps {
  paragraphs: Fieldelemente;
}

const ParagraphContainer = ({ paragraphs }: ParagraphContainerProps) => {
  const renderParagraph = (paragraph: ParagraphData) => {
    const type = paragraph.type.split("--")[1];
    switch (type) {
      case "icon_text_akkordeon":
        return <TextAkkordeon data={paragraph} />;

      default:
        return (
          <div className="text-[22px] text-red">
            Markup does not exists for paragraph{" "}
            <span className="underline">{type}</span>
          </div>
        );
    }
  };

  return (
    <>
      {paragraphs.data.map((paragraph) => {
        return (
          <section key={paragraph.id}>{renderParagraph(paragraph)}</section>
        );
      })}
    </>
  );
};

export default ParagraphContainer;

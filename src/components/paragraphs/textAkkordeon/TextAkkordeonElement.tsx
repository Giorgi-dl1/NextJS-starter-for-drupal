"use client";

import { ParagraphData } from "@/types";
import useDrupalImage from "@/hooks/useDrupalImage";

interface TextAkkordeonElementProps {
  data: ParagraphData;
}

const TextAkkordeonElement = ({ data }: TextAkkordeonElementProps) => {
  const iconUrl = useDrupalImage(
    data.relationships.field_icon.data.id,
    "media"
  );
  const hoverIconUrl = useDrupalImage(
    data.relationships.field_hover_icon.data.id,
    "media"
  );

  console.log(data.relationships.field_icon);

  return <div>TextAkkordeonElement</div>;
};

export default TextAkkordeonElement;

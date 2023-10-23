"use client";

import { ParagraphData } from "@/types";
import TextAkkordeonElement from "./TextAkkordeonElement";

interface TextAkkordeonProps {
  data: ParagraphData;
}
const TextAkkordeon = ({ data }: TextAkkordeonProps) => {
  return (
    <div>
      {data.relationships.field_elemente.data.map((item) => (
        <TextAkkordeonElement key={item.id} data={item} />
      ))}
    </div>
  );
};

export default TextAkkordeon;

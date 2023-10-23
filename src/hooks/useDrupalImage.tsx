import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ImageResponse } from "../types/Image";

export default function useDrupalImage(id: string, type: string) {
  const [imageUrl, setImageUrl] = useState("");

  const url = process.env.NEXT_PUBLIC_API_URL + "/jsonapi/file/file/" + id;

  const fetchImage = useCallback(
    async (url: string) => {
      if (id) {
        const url =
          process.env.NEXT_PUBLIC_API_URL + `jsonapi/${type}/file/` + id;
        const { data } = (await axios.get<ImageResponse>(url)).data;

        if (type === "media") {
          const fileId = data.relationships.field_media_image.data.id;
          const fileUrl =
            process.env.NEXT_PUBLIC_API_URL + `jsonapi/file/file/` + fileId;
          const { data: fileData } = (await axios.get<ImageResponse>(fileUrl))
            .data;

          setImageUrl(
            process.env.NEXT_PUBLIC_API_URL + fileData.attributes.uri.url
          );
        } else if (type === "file") {
          setImageUrl(
            process.env.NEXT_PUBLIC_API_URL + data.attributes.uri.url
          );
        }
      }
    },
    [setImageUrl, id]
  );

  useEffect(() => {
    fetchImage(url);
  }, [fetchImage]);

  return imageUrl;
}

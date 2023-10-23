// config axios
import { LoadedParagraph, PageResponse, ParagraphData } from "@/types";
import axios from "axios";
import { ImageResponse } from "next/server";

type Locale = string | undefined;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function fetchNestedParagraphs(
  fetchedParagraphs: LoadedParagraph[],
  locale: Locale
) {
  const updatedFetchedParagraphs = await Promise.all(
    fetchedParagraphs.map(async (item) => {
      if (item.relationships?.field_elemente?.data.length > 0) {
        const promiseArray = item.relationships.field_elemente.data.map(
          async (paragraph: any) =>
            (
              await fetchParagraph<any>(
                paragraph.type.split("--")[1],
                paragraph.id,
                locale
              )
            ).data.data
        );
        const fetchedParagraphs = await Promise.all(promiseArray);
        item.relationships.field_elemente.data = fetchedParagraphs;
      }
      return item; // Return the updated item
    })
  );

  return updatedFetchedParagraphs;
}
// delete
// export async function fetchImage(id: string, type: string) {
//   if (id) {
//     const url = process.env.NEXT_PUBLIC_API_URL + `jsonapi/${type}/file/` + id;
//     const { data } = (await axios.get<ImageResponse>(url)).data;

//     if (type === "media") {
//       const fileId = data.relationships.field_media_image.data.id;
//       const fileUrl =
//         process.env.NEXT_PUBLIC_API_URL + `jsonapi/file/file/` + fileId;
//       const { data: fileData } = (await axios.get<ImageResponse>(fileUrl)).data;

//       console.log(fileData);

//       return process.env.NEXT_PUBLIC_API_URL + fileData.attributes.uri.url;
//     } else if (type === "file") {
//       return process.env.NEXT_PUBLIC_API_URL + data.attributes.uri.url;
//     }
//   }
// }

export async function fetchAllParagraphs(
  arrayOfParagraphData: ParagraphData[],
  locale: Locale
) {
  const promiseArrary = arrayOfParagraphData.map(
    async (paragraph) =>
      (
        await fetchParagraph<any>(
          paragraph.type.split("--")[1],
          paragraph.id,
          locale
        )
      ).data.data
  );

  let fetchedParagraphs = await Promise.all(promiseArrary);

  fetchedParagraphs = await fetchNestedParagraphs(fetchedParagraphs, locale);

  return fetchedParagraphs;
}

export async function fetchPage(id: string, locale: Locale) {
  const lng = locale === "en" ? "" : `/${locale}`;

  const response = await api.get<PageResponse>(
    `${lng}/jsonapi/node/inhalt/${id}`
  );

  response.data.data.relationships.field_elemente.data =
    await fetchAllParagraphs(
      response.data.data.relationships.field_elemente.data,
      locale
    );

  return response;
}

export async function fetchParagraph<T>(
  type: string,
  id: string,
  locale?: string
) {
  const lng = locale === "en" ? "" : `/${locale}`;

  const response = await api.get<T>(`${lng}/jsonapi/paragraph/${type}/${id}`);

  return response;
}

export default api;

import axios from "axios";
import { useRouter } from "next/router";

export default function useAxios() {
  const router = useRouter();
  const { locale } = router;
  const lng = locale === "de" ? "" : `/${locale}`;

  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${lng}/jsonapi`,
    auth: {
      username: "beco",
      password: "becodev",
    },
  });
}

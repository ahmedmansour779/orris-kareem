import { Dispatch, SetStateAction } from "react";
import { mainBannerType } from "../types/apiTypes";
import { apiBaseUrl } from "@/flags";

export const fetchDataMainBanner = async (
  setData: SetStateAction<Dispatch<mainBannerType>>
) => {
  const url = `${apiBaseUrl}/main-banner`;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => setData(data))
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
};

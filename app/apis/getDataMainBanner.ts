import { apiBaseUrl } from "@/flags";
import { Dispatch, SetStateAction } from "react";
import { mainBannerType } from "../types/apiTypes";

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

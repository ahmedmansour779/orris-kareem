import { Dispatch, SetStateAction } from "react";
import { settingType } from "../types/apiTypes";
import { apiBaseUrl } from "@/flags";

export const fetchDataSetting = async (
  endPoint: string,
  setData: SetStateAction<Dispatch<settingType | null>>
) => {
  const url = `${apiBaseUrl}/${endPoint}`;

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

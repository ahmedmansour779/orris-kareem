import { Dispatch, SetStateAction } from "react";
import { aboutUsType } from "../types/apiTypes";
import { apiBaseUrl } from "@/flags";

export const fetchDataAboutUs = async (
  setData: SetStateAction<Dispatch<aboutUsType | null>>
) => {
  const url = `${apiBaseUrl}/about-us`;

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

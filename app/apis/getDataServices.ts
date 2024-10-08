import { Dispatch, SetStateAction } from "react";
import { servicesType } from "../types/apiTypes";
import { apiBaseUrl } from "@/flags";

export const fetchDataServices = async (
  setData: SetStateAction<Dispatch<servicesType[] | null>>
) => {
  const url = `${apiBaseUrl}/services`;

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

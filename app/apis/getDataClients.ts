import { apiBaseUrl } from "@/flags";
import { Dispatch, SetStateAction } from "react";
import { clientsType } from "../types/apiTypes";

export const fetchDataClients = async (
  setData: SetStateAction<Dispatch<clientsType[]>>
) => {
  const url = `${apiBaseUrl}/clients`;

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

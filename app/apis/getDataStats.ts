import { Dispatch, SetStateAction } from "react";
import { statsType } from "../types/apiTypes";

export const fetchDataStats = async (setData: SetStateAction<Dispatch<statsType | null>>) => {
    const url = "https://cms.orrisarena.com/api/stats";

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setData(data))
        .catch(error => {
            console.error('Fetch Error:', error);
        });
};

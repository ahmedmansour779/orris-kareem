import { Dispatch, SetStateAction } from "react";
import { servicesType } from "../types/apiTypes";

export const fetchDataServices = async (setData: SetStateAction<Dispatch<servicesType[] | null>>) => {
    const url = "https://cms.orrisarena.com/api/services";

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
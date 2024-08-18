import { Dispatch, SetStateAction } from "react";
import { settingType } from "../types/apiTypes";

export const fetchDataSetting = async (endPoint: string, setData: SetStateAction<Dispatch<settingType | null>>) => {
    const url = `https://cms.orrisarena.com/api/${endPoint}`;

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


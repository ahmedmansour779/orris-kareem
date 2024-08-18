import { Dispatch, SetStateAction } from "react";
import { projectsType } from "../types/apiTypes";

export const fetchDataProjects = async (setData: SetStateAction<Dispatch<projectsType[] | null>>) => {
    const url = "https://cms.orrisarena.com/api/projects";

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
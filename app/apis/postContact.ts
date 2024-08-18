import { contactType } from "../types/apiTypes";

export const postContactData = async (data: contactType) => {
    const url = "https://cms.orrisarena.com/api/contact"; // Replace with your actual base URL

    try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("Success:", responseData);
    } catch (error) {
        console.error("Error:", error);
    }
}

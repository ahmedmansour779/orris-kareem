
export const fetchDataClients = async () => {
    const url = "https://cms.orrisarena.com/api/clients";

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
        .then(data => console.log(data))
        .catch(error => {
            console.error('Fetch Error:', error);
        });

};
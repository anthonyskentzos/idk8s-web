const API_BASE_URL = 'http://idk8s.example/api';

async function fetchData(endpoint, elementId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        document.getElementById(elementId).textContent = data.character || data.imageTag;
        document.getElementById(elementId).classList.remove('loading');
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById(elementId).textContent = 'Error fetching data';
        document.getElementById(elementId).classList.remove('loading');
        document.getElementById(elementId).classList.add('error');
    }
}

function initialize() {
    fetchData('v1/pawpatrol', 'pawPatrolV1');
    fetchData('v1/imagetag', 'imageTag');
    fetchData('v2/pawpatrol', 'pawPatrolV2');
    fetchData('v2/imagetag', 'imageTagV2');
}

window.onload = initialize;

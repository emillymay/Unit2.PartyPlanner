// Sample data for initial parties
const partiesData = [
    { name: 'Party 1', date:'2023-12-31', time: '20:00', location: 'Venue 1', description: 'Description 1' },
    { name: 'Party 2', date:'2024-01-15', time: '18:30', location: 'Venue 2', description: 'Description 2' }
];

// Function to render parties on the page
function renderParties() {
    const partyList = document.getElementById('partyList');
    partyList.innerHTML = '';

    partiesData.forEach((party, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${party.name}</strong><br>
            Date: ${party.date}<br>
            Time: ${party.time}<br>
            Location: ${party.location}<br>
            Description: ${party.description}
            <button class="delete-btn" onclick="deleteParty(${index})">Delete</button>
        `;
        partyList.appendChild(li);
    });
}

// Function to delete a party
function deleteParty(index) {
    partiesData.splice(index, 1);
    renderParties();
}

// Function to add a new party
function addParty() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    if (name && date && time && location && description) {
        const newParty = { name, date, time, location, description };
        partiesData.push(newParty);
        renderParties();

        // Clear the form fields
        document.getElementById('partyForm').reset();
    } else {
        alert('Please fill out all the fields');
    }
}

// Initial rendering of parties
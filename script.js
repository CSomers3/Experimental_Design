const scenarios = [
    "What a beautiful day for rain!",
    "I just love waiting in long lines!",
    "Wow, I'm so excited to do my taxes!",
    "This tiny phone screen is perfect for watching movies.",
    "I'm thrilled to be stuck in traffic for hours!"
];

let currentScenario = 0;

function loadScenario() {
    document.getElementById('scenario').textContent = scenarios[currentScenario];
}

function respond(response) {
    const scenario = scenarios[currentScenario];
    submitResponse(scenario, response);
    currentScenario = (currentScenario + 1) % scenarios.length;
    loadScenario();
}

function submitResponse(scenario, response) {
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ scenario: scenario, response: response }),
    })
    .then(response => console.log('Success'))
    .catch(error => console.error('Error:', error));
}

loadScenario();

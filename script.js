




// Function to update temperature display
function updateTemperature(data) {
    document.getElementById('temperatureDisplay').innerText =   data + ' °C';
}

// Function to update hydrogen concentration display
function updateHydrogen(data) {
    document.getElementById('HydroDisplay').innerText =  data + ' ppm';
}

// Function to process serial data and update displays
function processSerialData(data) {
    const [id, value] = data.split(':').map(str => str.trim());
    switch (id) {
        case 'temperatureDisplay':
            updateTemperature(value);
            break;
        case 'HydroDisplay':
            updateHydrogen(value);
            break;
        default:
            console.error('Invalid ID:', id);
            break;
    }
}

// Function to handle incoming serial data
async function handleSerialData(reader) {
    let receivedData = '';
    while (true) {
        const { value, done } = await reader.read();
        if (done) {
            break;
        }
        receivedData += new TextDecoder().decode(value);
        const messageEndIndex = receivedData.indexOf('\n');
        if (messageEndIndex !== -1) {
            const message = receivedData.substring(0, messageEndIndex);
            receivedData = receivedData.substring(messageEndIndex + 1);
            processSerialData(message);
        }
    }
}

// Function to initialize serial port connection
async function initSerial() {
    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        const reader = port.readable.getReader();
        await handleSerialData(reader);
    } catch (error) {
        console.error('Serial connection error:', error);
    }
}

// Initialize serial port connection when the connectButton is clicked
document.getElementById('connectButton').addEventListener('click', initSerial);

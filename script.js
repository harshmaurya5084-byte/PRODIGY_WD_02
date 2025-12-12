// Stopwatch variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;
let lapCounter = 0;

// Get DOM elements
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');

// Event listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

// Start function
function start() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateTime, 10); // Update every 10ms
        
        // Update button states
        startBtn.disabled = true;
        stopBtn.disabled = false;
        lapBtn.disabled = false;
        
        // Change button text to indicate resume capability
        startBtn.textContent = 'Resume';
        
        // Vibrate on mobile devices
        vibrateDevice(50);
    }
}

// Stop function
function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
        
        // Update button states
        startBtn.disabled = false;
        stopBtn.disabled = true;
        lapBtn.disabled = true;
        
        // Vibrate on mobile devices
        vibrateDevice(100);
    }
}

// Reset function
function reset() {
    stop();
    
    // Reset all values
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCounter = 0;
    
    // Update display
    updateDisplay();
    
    // Clear lap times
    lapList.innerHTML = '';
    
    // Reset button states and text
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
    startBtn.textContent = 'Start'; // Reset button text back to 'Start'
}

// Update time function
function updateTime() {
    milliseconds += 1;
    
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    
    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }
    
    updateDisplay();
}

// Update display function
function updateDisplay() {
    hoursDisplay.textContent = padZero(hours);
    minutesDisplay.textContent = padZero(minutes);
    secondsDisplay.textContent = padZero(seconds);
    millisecondsDisplay.textContent = padZero(milliseconds);
    
    // Update analog clock hands
    updateClockHands();
}

// Update clock hands positions
function updateClockHands() {
    // Calculate degrees for each hand
    // Each second = 6 degrees (360/60)
    const secondDegrees = (seconds + (milliseconds / 100)) * 6;
    
    // Each minute = 6 degrees, plus contribution from seconds
    const minuteDegrees = (minutes * 6) + (seconds / 10);
    
    // Each hour = 30 degrees (360/12), plus contribution from minutes
    const hourDegrees = ((hours % 12) * 30) + (minutes / 2);
    
    // Apply rotation to hands
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Pad zero for single digits
function padZero(value) {
    return value < 10 ? '0' + value : value;
}

// Record lap time
function recordLap() {
    if (isRunning) {
        lapCounter += 1;
        
        const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
        
        const lapItem = document.createElement('li');
        lapItem.innerHTML = `
            <span class="lap-number">Lap ${lapCounter}</span>
            <span class="lap-time">${lapTime}</span>
        `;
        
        // Add to the beginning of the list
        lapList.insertBefore(lapItem, lapList.firstChild);
        
        // Add animation
        lapItem.style.animation = 'slideIn 0.3s ease';
        
        // Light vibration for lap recording
        vibrateDevice(30);
    }
}

// Vibration function for mobile devices
function vibrateDevice(duration) {
    // Check if the Vibration API is supported
    if ('vibrate' in navigator) {
        navigator.vibrate(duration);
    }
}

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

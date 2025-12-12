# Task 02: PRODIGY_WD_02-Stopwatch web application

# Name:Harsh maurya

# live demo:https://harshmaurya5084-byte.github.io/PRODIGY_WD_02/


# ⏱️ Stopwatch Web Application

A fully functional, mobile-responsive stopwatch web application with an elegant analog clock display and advanced features.

**Created by: HM Prodigy**

---

## ✨ Features

### 🎯 Core Functionality
- **Start/Resume Timer** - Begin timing or resume from where you stopped
- **Stop/Pause** - Pause the timer at any point
- **Reset** - Clear all timings and start fresh
- **Lap Times** - Record multiple lap times while the stopwatch is running

### 🕐 Dual Display
- **Analog Clock** - Beautiful circular clock face with moving hands
  - Hour hand (purple gradient)
  - Minute hand (green gradient)
  - Second hand (red/yellow gradient)
  - 12-hour numbered display
- **Digital Display** - HH:MM:SS:MS format with glowing effects

### 📱 Mobile Features
- **Fully Responsive** - Works perfectly on all devices
  - Desktop computers
  - Tablets
  - Mobile phones (portrait & landscape)
- **Touch Optimized** - All buttons designed for touch interaction
- **Vibration Feedback** - Haptic feedback on mobile devices
  - Start/Resume: 50ms vibration
  - Stop: 100ms vibration
  - Lap: 30ms vibration
- **No Zoom** - Prevents unwanted zooming on mobile
- **App-like Experience** - Can be added to home screen on iOS/Android

### 🎨 Design Elements
- **Modern Gradient Background** - Purple gradient theme
- **Glass-morphism UI** - Frosted glass container effect
- **Smooth Animations** - Rotating shimmer effect, button ripples
- **Brand Tag** - "HM Prodigy" badge with pulse animation
- **Glowing Effects** - Clock and display have subtle glow
- **3D Shadows** - Depth and dimension throughout

---

## 🚀 Getting Started

### Installation

1. **Download the files** to your computer
2. Ensure all three files are in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`

### Running the Application

Simply open `index.html` in any modern web browser:
- **Double-click** the `index.html` file, or
- **Right-click** → Open with → Your preferred browser

### Supported Browsers
- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge
- ✅ Mozilla Firefox
- ✅ Safari (iOS 16+)
- ✅ Mobile browsers (Chrome, Safari, Samsung Internet)

---

## 📖 How to Use

### Basic Operations

1. **Start the Stopwatch**
   - Click the **Start** button to begin timing
   - Watch both the analog clock hands and digital display update in real-time

2. **Record Lap Times**
   - While running, click **Lap** to record the current time
   - Lap times appear in a list below the controls
   - Latest laps appear at the top

3. **Pause the Timer**
   - Click **Stop** to pause timing
   - The time is preserved

4. **Resume Timing**
   - After stopping, click **Start** (now showing "Resume")
   - Timing continues from where it stopped

5. **Reset Everything**
   - Click **Reset** to clear all times
   - Returns to 00:00:00:00
   - Clears all lap times

### Mobile Usage

- **Tap** buttons for interaction
- **Feel vibrations** when pressing Start, Stop, or Lap
- **Scroll** the lap times list if you have many laps
- **Landscape mode** automatically adjusts layout

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6)** - Functionality and interactivity

### Key Features
- **Interval Timing** - Updates every 10ms for precision
- **Vibration API** - Native haptic feedback on mobile
- **CSS Animations** - Smooth transitions and effects
- **Flexbox Layout** - Responsive design system
- **Media Queries** - Breakpoints for all screen sizes

### File Structure
```
project-1/
├── index.html       # Main HTML structure
├── style.css        # All styles and animations
├── script.js        # Stopwatch logic and functions
└── README.md        # This file
```

---

## 🎨 Customization

### Changing Colors
Edit `style.css`:
- **Background gradient**: Line 6-7 (`body` selector)
- **Clock hands**: Lines 88-114 (`.hour-hand`, `.minute-hand`, `.second-hand`)
- **Display color**: Line 149 (`.display`)
- **Button colors**: Lines 240-290

### Adjusting Clock Size
Edit `style.css`, Line 28-35 (`.clock-face`):
```css
width: 300px;  /* Change both width and height */
height: 300px;
```

### Vibration Intensity
Edit `script.js`:
- Start vibration: Line 38 (`vibrateDevice(50)`)
- Stop vibration: Line 58 (`vibrateDevice(100)`)
- Lap vibration: Line 135 (`vibrateDevice(30)`)

---

## 📱 Responsive Breakpoints

- **Desktop**: Full-size display (> 600px)
- **Mobile**: Optimized layout (≤ 600px)
- **Small Mobile**: Compact view (≤ 380px)
- **Landscape**: Horizontal optimization (< 900px landscape)

---

## 🌟 Features Showcase

### Analog Clock
- Real-time synchronized hands
- 12 numbered positions
- Smooth continuous motion
- 3D border effects

### Digital Display
- Monospace font for readability
- Hours : Minutes : Seconds : Milliseconds
- Glowing green text effect
- Dark background with border glow

### Lap Time List
- Scrollable list (max 300px on desktop)
- Newest laps appear first
- Slide-in animation
- Numbered lap counter
- Hover effects

---

## 🐛 Troubleshooting

### Stopwatch Not Working
- Ensure JavaScript is enabled in your browser
- Check browser console for errors (F12)
- Verify all files are in the same directory

### No Vibration on Mobile
- Vibration API requires HTTPS or localhost
- Check device vibration settings
- Not all browsers support vibration (iOS Safari limited)

### Display Issues
- Try refreshing the page (Ctrl/Cmd + R)
- Clear browser cache
- Update to the latest browser version

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 👨‍💻 Developer

**HM Prodigy**

---

## 🔄 Version History

- **v1.0** - Initial release
  - Basic stopwatch functionality
  - Digital display
  - Start, Stop, Reset buttons

- **v2.0** - Major update
  - Added analog clock display
  - Lap time recording
  - Mobile responsive design
  - Vibration feedback
  - Enhanced UI with animations
  - Brand identity

---

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Verify you're using a modern browser
3. Ensure all files are present and properly linked

---

**Enjoy your stopwatch! ⏱️✨**

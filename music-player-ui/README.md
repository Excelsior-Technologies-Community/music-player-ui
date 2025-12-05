# 🎵 Music Player UI

A **React + Vite** music player UI that demonstrates state management and event handling in React.  
It features **play/pause**, **volume control**, and a **draggable progress bar** with a clean and modern interface.

---

## 🛠 Project Details

**Project Name:** Music Player UI  
**Technologies Used:** React, Vite, HTML, CSS, JavaScript  
**Concepts Covered:** State, Event Handling  

### Key Features

- Play / Pause button  
- Volume control  
- Visible progress bar with draggable seek  
- Clean, modern UI  

---

![Music Player UI](./src/assets/music%20app1.png)
![Music Player UI](./src/assets/music%20app2.png)
![Music Player UI](./src/assets/music%20app3.png)
![Music Player UI](./src/assets/music%20app4.png)

## 📂 Folder Structure

music-player-ui/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── MusicPlayer.jsx
│ ├── index.css
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── README.md

---

## ⚡ Features in Action

- Play or pause music with a single button  
- Adjust volume using a slider  
- See song progress in real time via progress bar  
- Drag the progress bar to seek within the song  

---

## 💻 Getting Started

### Prerequisites

- Node.js v16 or higher  
- npm (comes with Node.js)  

### Installation & Run

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate into the project folder
cd music-player-ui

# Install dependencies
npm install

# Start the development server
npm run dev

Open your browser at:
http://localhost:5173/

📝 How to Use

Click the Play ▶ button to start the music.
Click Pause ⏸ to stop the music.
Use the volume slider to adjust the audio volume.
Drag the progress bar to jump to a specific part of the track.
The progress bar updates in real-time as the song plays.

📚 Concepts Used

React Hooks: useState and useRef for managing state and referencing the audio element.
Event Handling: onClick for play/pause, onChange for volume and progress sliders, onTimeUpdate to update the progress bar.
Controlled Components: The sliders (volume & progress) are controlled inputs synced with state.
Modular Component Design: MusicPlayer component separated from App.jsx for clean structure.
CSS Styling: Custom styles for buttons, sliders, and container with responsive and modern UI design.

📄 License
This project is open-source and free to use.
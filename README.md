TrackFlow - Music Dashboard

TrackFlow is a modern music dashboard where users can **login, upload, search, and explore tracks**.  
It features a clean UI, a responsive layout, and smooth navigation.
Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/Nileshstack/TuneDeck.git
   cd trackflow
   npm install
   npm run dev
Open http://localhost:3000 in your browser.
  
**🌐 Live Website Link :-** https://tune-deck.vercel.app/

**Approach**
1) Used Next.js (App Router) for building a fast and scalable frontend.
  
2) Implemented modular components like Navbar, SearchBar, TrackTable, and ThemeSwitcher.

3) Stored session data using localStorage to manage login/logout state.

4) Designed UI with CSS Modules + Glassmorphism + Gradient backgrounds for a modern look.

5) Added responsive design using @media queries for mobile and tablets.

6) Created a mock API endpoint (/api/tracks) to fetch and display track data dynamically.

**Features Completed**

1) Authentication: Simple login/logout with session storage.

2) Dashboard: Displays all uploaded tracks in a stylish table.

3) Search Functionality: Search tracks by title or artist.

4) Upload Page: Add new tracks with title, artist, release date, and genre.

5) Track Details Page: View detailed info about a specific track.

6) Responsive UI: Works across desktop, tablet, and mobile screens.

7) Modern Design: Gradient backgrounds, blur effects, hover states.




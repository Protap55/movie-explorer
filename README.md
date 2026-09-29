# 🎬 Movie Explorer

Movie Explorer is a responsive web application built with React that allows users to explore TV shows, search for shows by title, and view detailed information about each show.

The project uses the **TVMaze API** to fetch show data and provides a simple, modern, and responsive user experience.

## 🔗 Live Demo & Repository

- **Live Website:** https://movie-explorer-client.netlify.app/
- **GitHub Repository:** https://github.com/Protap55/movie-explorer

## ✨ Features

- 🏠 Responsive Home Page
- 🎬 Browse TV Shows
- 🔍 Search shows by title
- ⭐ Show ratings
- 📅 Show premiered/release date
- 🖼️ Show posters
- 📋 Detailed show information
- 🎭 Genres, language, and status
- 🪟 Details modal
- 📱 Fully responsive design
- ⚡ Loading state
- ❌ No results state
- 📄 404 Error Page
- 📱 Responsive navigation menu
- ❓ FAQ section
- 📊 Movie/Show statistics section

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- React Router
- Tailwind CSS
- DaisyUI
- TVMaze API
- Vite
- React Icons

## 🌐 API

This project uses the **TVMaze API** to fetch TV show information.

### Get All Shows

```text
https://api.tvmaze.com/shows
```

### Search Shows

```text
https://api.tvmaze.com/search/shows?q=:query
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Protap55/movie-explorer.git
```

### 2. Go to the project directory

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL shown in your terminal.

## 🔍 How Search Works

Users can search for a TV show using the search bar on the Movies page.

The search text is sent to the TVMaze search API:

```text
https://api.tvmaze.com/search/shows?q=:query
```

The returned search results are then displayed as reusable show cards.

## 🪟 Show Details

Each show card contains a **See Details** button.

Clicking the button opens a modal containing:

- Show title
- Poster
- Rating
- Premiered date
- Language
- Genres
- Status
- Overview/Summary
- TVMaze link

## 📱 Responsive Design

Movie Explorer is designed to work across different screen sizes:

- 📱 Mobile
- 💻 Tablet
- 🖥️ Desktop

The show cards use a responsive grid layout that adjusts based on screen size.

## 👨‍💻 Author

**Protap Dutta**

Junior Frontend Developer

- GitHub: https://github.com/Protap55
- Project Repository: https://github.com/Protap55/movie-explorer

## 📄 License

This project was created for learning and educational purposes.

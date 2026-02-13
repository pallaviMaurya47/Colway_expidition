# TravelX - Travel Website

## Project Overview
TravelX is a modern, responsive travel website built with React and Vite. It showcases travel destinations, experiences, and allows users to explore extraordinary journeys. The site includes features like user authentication, image sliders, and detailed travel information.

## Technologies Used
- **Frontend Framework:** React
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** CSS3 with responsive design
- **Icons/Images:** Unsplash for images, emoji icons

## Project Structure
```
travel_frontend/
├── index.html          # Main HTML file, entry point for the app
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.jsx        # React app entry point, renders App component
│   ├── App.jsx         # Main App component with routing
│   ├── style.css       # Global styles and component-specific styles
│   └── components/
│       ├── Home.jsx        # Home page component with hero, themes, destinations
│       ├── Navbar.jsx      # Navigation bar component
│       ├── Login.jsx       # Login form component
│       ├── Signup.jsx      # Signup form component
│       └── ImageSlider.jsx # Image slideshow component
└── README.md           # This file
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd travel_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (default Vite port)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features
- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Navigation:** Easy navigation between pages with React Router
- **Image Slider:** Automatic rotating travel images
- **User Authentication:** Login and signup forms (frontend only)
- **Travel Themes:** Explore by adventure, culture, luxury, etc.
- **Featured Destinations:** Showcase of popular travel spots
- **Testimonials:** Customer stories and reviews
- **Team Information:** Meet the travel experts

## Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use descriptive component and variable names
- Add comments to explain complex logic
- Keep components modular and reusable

### File Organization
- Place components in `src/components/`
- Use `src/style.css` for global and component styles
- Keep images and assets in appropriate folders

### Adding New Features
1. Create new components in `src/components/`
2. Add routes in `src/App.jsx`
3. Style in `src/style.css`
4. Update navigation in `src/components/Navbar.jsx` if needed

### Styling
- Use CSS classes for styling
- Follow BEM methodology where possible
- Ensure responsive design with media queries
- Use CSS variables for consistent colors and fonts

## Deployment
The app can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages. Build the project with `npm run build` and upload the `dist` folder.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is for educational purposes. Feel free to use and modify as needed.

## Contact
For questions or suggestions, please open an issue in the repository.

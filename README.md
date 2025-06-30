# Portfolio Website

A modern, responsive portfolio website built with React to showcase my projects, skills, and professional experience.

## 🚀 Live Demo

[View Live Site](https://your-portfolio-url.com)

## 📸 Screenshots

![Portfolio Homepage](https://github.com/18simran/Portfolio/blob/main/public/images/screenshots/home.png)
![What i do Section](https://github.com/18simran/Portfolio/blob/main/public/images/screenshots/whatido.png)
![Skills Section](https://github.com/18simran/Portfolio/blob/main/public/images/screenshots/skills.png).
![Skills Section](https://github.com/18simran/Portfolio/blob/main/public/images/screenshots/projects.png)
![Skills Section](https://github.com/18simran/Portfolio/blob/main/public/images/screenshots/certificate.png)
![Skills Section](https://github.com/18simran/Portfolio/blob/main/public/images/screenshots/contact.png)

## ✨ Features

- **Responsive Design** - Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Engaging user interface with hover effects and transitions
- **Project Showcase** - Detailed project cards with live demos and source code links
- **Skills Section** - Visual representation of technical skills and proficiencies
- **Contact Form** - Functional contact form with form validation
- **Dark/Light Mode** - Toggle between dark and light themes
- **Fast Loading** - Optimized performance with lazy loading and code splitting
- **SEO Optimized** - Meta tags and structured data for better search engine visibility

## 🛠️ Tech Stack

**Frontend:**

- React 18.x
- JavaScript (ES6+)
- HTML5 & CSS3
- Bootstrap CSS / Styled Components
- React Router DOM
- React Hook Form
- AOS (for animations)
- React-icons

**Tools & Services:**

- Vite / Create React App
- Netlify / Vercel (deployment)
- EmailJS (contact form)
- ESLint & Prettier
- Git & GitHub

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 16.x or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_GITHUB_TOKEN=your_github_token
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173/` to view the application.

## 📝 Customization

### Personal Information

Update your personal information in `src/data/personalInfo.js`:

```javascript
export const personalInfo = {
  name: "Simran Kaur",
  title: "Web developer",
  social: {
    github: "https://github.com/18simran",
    linkedin: "https://www.linkedin.com/in/simrankaur17062003/",
    instagram: "https://instagram.com",
  },
};
```

### Projects Data

Add your projects in `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief project description",
    image: "/images/project1.jpg",
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  // Add more projects...
];
```

`````

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- **Code Splitting** - Components are lazy-loaded for better performance
- **Image Optimization** - Images are compressed and served in modern formats
- **Caching** - Proper caching headers for static assets

## 🔧 Available Scripts

````bash
# Development
npm start          # Start development server
npm run dev        # Alternative development command

# Building
npm run build      # Create production build
npm run preview    # Preview production build locally

# Linting & Formatting
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
npm run format     # Format code with Prettier

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
`````

3. Run: `npm run deploy`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📞 Contact

**Simran Kaur**

- Email:simrankaur44006@gmail.com
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/simrankaur17062003/)
- GitHub: [Your GitHub](https://github.com/18simran)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Bootstrap CSS](https://getbootstrap.com/) - For styling
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - For animations

- [EmailJS](https://www.emailjs.com/) - For contact form functionality
- [Unsplash](https://unsplash.com/) - For stock images
- [Font Awesome](https://fontawesome.com/) - For icons

---

⭐ **If you found this project helpful, please give it a star!** ⭐

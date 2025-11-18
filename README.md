# Art of Devil - Photography & Video Editing Portfolio

A modern, responsive portfolio website built with React.js and Bootstrap for photographers and video editors.

## 🚀 Features

- **Modern UI Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based Architecture**: Organized React components for easy maintenance
- **Portfolio Gallery**: Separate sections for photography and videography work
- **Interactive Navigation**: Smooth scrolling navigation with hover effects
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Links to social media profiles
- **SEO Optimized**: Meta tags and Open Graph tags for better search visibility
- **Fast Performance**: Optimized images and code for fast loading

## 🛠️ Technologies Used

- **React.js** - Frontend JavaScript library
- **Bootstrap 5** - CSS framework for responsive design
- **React Bootstrap** - Bootstrap components for React
- **Bootstrap Icons** - Icon library
- **AOS (Animate On Scroll)** - Animation library
- **Google Fonts** - Inter font family
- **CSS3** - Custom styles and animations

## 📂 Project Structure

```
src/
├── components/
│   ├── Navigation.js    # Navigation bar component
│   ├── Hero.js          # Hero section component
│   ├── Gallery.js       # Portfolio gallery component
│   ├── About.js         # About section component
│   ├── Contact.js       # Contact form component
│   └── Footer.js        # Footer component
├── App.js               # Main App component
├── App.css              # Custom styles
└── index.js             # Entry point
```

## 🎨 Sections

### Navigation
- Fixed navigation bar with smooth scrolling
- Responsive hamburger menu for mobile devices
- Brand logo with camera icon

### Hero Section
- Eye-catching banner with background image
- Call-to-action buttons
- Animated text with fade-in effects

### Gallery
- Tabbed interface for Photography and Videography
- Grid layout with hover effects
- Sample portfolio items with categories

### About
- Professional bio and experience
- Skills progress bars
- Services offered with icons
- Statistics counter

### Contact
- Contact form with validation
- Contact information display
- Social media links
- Working hours information

### Footer
- Quick links navigation
- Services list
- Contact information
- Social media links
- Copyright information

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd art-of-devil-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The color scheme can be customized by modifying the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #ffc107;    /* Yellow/Gold */
  --secondary-color: #212529;  /* Dark Gray */
  --accent-color: #6c757d;     /* Gray */
  --light-color: #f8f9fa;      /* Light Gray */
  --dark-color: #343a40;       /* Dark */
}
```

### Content
- Update portfolio images in the `Gallery.js` component
- Modify personal information in the `About.js` component
- Update contact information in `Contact.js` and `Footer.js` components
- Change the brand name throughout the components

### Images
Replace the placeholder images with your actual portfolio images:
- Update image URLs in `Gallery.js`
- Replace hero background image in `App.css`
- Add your profile image in `About.js`

## 📧 Contact Form Integration

The contact form is ready to be integrated with backend services like:
- EmailJS
- Formspree
- Netlify Forms
- Custom backend API

## 📈 Performance Features

- Lazy loading for images
- Optimized CSS animations
- Compressed image formats
- Minimal JavaScript bundle size

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Creates production build
- `npm test` - Runs test suite
- `npm run eject` - Ejects from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions, please contact:
- Email: contact@artofdevil.com
- Website: [Art of Devil Portfolio](https://artofdevil.com)

---

Built with ❤️ by Art of Devil
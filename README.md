# Personal Introduction Page - Rizky Ramdhan Nugraha

A professional introduction page showcasing expertise as a Site Reliability Engineer, DevOps Engineer, and Cloud Engineer.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, modern design with proper typography and spacing
- **Accessibility Compliant**: WCAG 2.1 AA compliant with proper ARIA labels and semantic HTML
- **Performance Optimized**: Fast loading with optimized images and minimal dependencies
- **Error Handling**: Graceful fallbacks for missing images and data

## Structure

- `index.html` - Main HTML structure with semantic markup
- `styles.css` - Complete CSS styling with responsive design
- `script.js` - JavaScript functionality for dynamic content management

## Sections

1. **Hero Section**: Name, professional titles, profile picture, and summary
2. **Experience Section**: Professional work history with technologies used
3. **Technology Stack**: Categorized display of technical skills and tools

## Customization

### Adding Your Profile Picture
Replace `profile-placeholder.jpg` with your actual profile picture. The system includes automatic fallback to initials if the image fails to load.

### Updating Experience
Edit the `experienceData.experiences` array in `script.js` to add your actual work experience:

```javascript
{
    id: "unique-id",
    title: "Your Job Title",
    company: "Company Name", 
    duration: "Start Date - End Date",
    description: "Description of your role and achievements",
    technologies: ["Tech1", "Tech2", "Tech3"]
}
```

### Updating Technology Stack
Modify the `techStackData.techStack` object in `script.js` to reflect your actual skills:

```javascript
"Category Name": ["Technology 1", "Technology 2", "Technology 3"]
```

### Updating Profile Information
Modify the `profileData` object in `script.js` to update your personal information and summary.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Accessibility Features

- Skip navigation link
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color scheme
- Focus indicators

## Performance Features

- Lazy loading images
- Optimized CSS with custom properties
- Minimal JavaScript footprint
- Print-friendly styles
- Reduced motion support for accessibility

## Getting Started

1. Replace `profile-placeholder.jpg` with your actual profile picture
2. Update the experience data in `script.js`
3. Update the technology stack in `script.js`
4. Customize the professional summary
5. Open `index.html` in a web browser

## License

© 2024 Rizky Ramdhan Nugraha. All rights reserved.
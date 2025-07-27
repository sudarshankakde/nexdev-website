# NexDev - Innovative IT Solutions Website

A modern, responsive website for NexDev IT Solutions built with Next.js 14, React, Tailwind CSS, and GSAP animations.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Best practices for search engine optimization
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Animations**: Smooth GSAP animations with scroll triggers
- **Contact Form**: Interactive contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Lucide React
- **Components**: Custom components with shadcn/ui base

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/nexdev/website.git
cd nexdev-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

\`\`\`
nexdev-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
└── README.md
\`\`\`

## 🎨 Customization

### Colors
The website uses a blue and purple color scheme. You can customize colors in:
- `tailwind.config.js` for Tailwind classes
- `app/globals.css` for CSS custom properties

### Content
Update company information in the respective component files:
- Company details: `components/About.tsx`
- Services: `components/Services.tsx`
- Team members: `components/Team.tsx`
- Contact info: `components/Contact.tsx` and `components/Footer.tsx`

### Animations
GSAP animations are configured in each component. You can modify:
- Animation timing and easing
- Scroll trigger points
- Animation sequences

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion support

## 🔍 SEO Features

- Optimized meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Canonical URLs
- Sitemap ready

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
\`\`\`bash
npm run build
npm start
\`\`\`

## 📊 Performance

The website is optimized for performance with:
- Image optimization
- Lazy loading
- Code splitting
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email hello@nexdev.com or visit our website.

---

Built with ❤️ by NexDev Solutions

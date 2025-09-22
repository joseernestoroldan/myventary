# Inventra - Inventory Management System

A modern, responsive inventory management application built with the T3 Stack.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism design with animated gradients
- **Authentication**: Google OAuth and email/password authentication
- **Responsive Design**: Mobile-first approach with adaptive components
- **Real-time Updates**: Live inventory tracking and management
- **Secure**: Server-side validations and protected routes

## 🛠️ Tech Stack

This is a [T3 Stack](https://create.t3.gg/) project built with:

- [Next.js](https://nextjs.org) - React framework
- [NextAuth.js](https://next-auth.js.org) - Authentication
- [Prisma](https://prisma.io) - Database ORM
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Google Cloud Console account (for OAuth)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd myventary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

- [Environment Setup](./ENVIRONMENT_SETUP_EN.md) - Configuration guide
- [Actions Structure](./ACTIONS_STRUCTURE_EN.md) - Server actions organization
- [Optimization Summary](./OPTIMIZATION_SUMMARY_EN.md) - Performance improvements

## 🏗️ Project Structure

```
src/
├── actions/           # Server actions
├── app/              # Next.js app router
├── components/       # Reusable UI components
├── lib/             # Utility functions
├── server/          # Server-side code
└── styles/          # Global styles
```

## 🎨 Design System

- **Glassmorphism**: Modern glass-like effects
- **Animated Gradients**: Dynamic background animations
- **Responsive Grid**: Adaptive layouts for all devices
- **Consistent Spacing**: Harmonious visual rhythm

## 🔐 Authentication

- **Google OAuth**: One-click sign-in
- **Email/Password**: Traditional authentication
- **Protected Routes**: Role-based access control
- **Session Management**: Secure session handling

## 📱 Responsive Features

- **Mobile**: Optimized touch interactions
- **Tablet**: Adaptive layouts
- **Desktop**: Full feature set with hover effects

## 🚀 Deployment

Deploy easily on:
- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- Check the [documentation](./Documentation/)
- Open an [issue](https://github.com/your-repo/issues)
- Join our [Discord](https://t3.gg/discord)

---

Built with ❤️ using the T3 Stack


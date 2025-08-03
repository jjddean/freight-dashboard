# MarketLive Admin Dashboard

A React-based admin dashboard for the MarketLive freight management platform.

## Features

- **Dashboard Overview**: System stats, API testing, and quick actions
- **User Management**: Manage freight customers and access control
- **Shipment Tracking**: View and manage all shipments
- **Compliance Management**: Handle compliance flags and document reviews
- **Payment Management**: Monitor payments and invoices
- **Support System**: Customer support ticket management
- **System Logs**: API monitoring and system events
- **Settings**: Admin configuration and team management

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Clerk** for authentication
- **Vercel** for deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jjddean/freight-dashboard.git
cd freight-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with your Clerk publishable key:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Set your environment variables in the Vercel dashboard
4. Deploy!

### Vercel Configuration

The project includes:
- `vercel.json` - Deployment configuration
- `vite.config.ts` - Build configuration

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Alternative layout component
│   ├── SimpleLayout.tsx # Main layout with sidebar
│   └── NotificationSystem.tsx # Toast notifications
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── UsersPage.tsx   # User management
│   ├── ShipmentsPage.tsx # Shipment tracking
│   ├── CompliancePage.tsx # Compliance management
│   ├── PaymentsPage.tsx # Payment management
│   ├── SupportPage.tsx # Support tickets
│   ├── LogsPage.tsx    # System logs
│   ├── ManualPage.tsx  # Manual actions
│   └── SettingsPage.tsx # Admin settings
├── services/           # API services
│   └── vercelApi.ts    # API testing service
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Key Features

### API Integration Testing
The dashboard includes built-in API testing for the main freight application:
- Quote API testing
- Carrier rates API testing  
- Shipment tracking API testing

### Authentication
Uses Clerk for secure authentication with protected routes.

### Responsive Design
Fully responsive design that works on desktop and mobile devices.

### Real-time Updates
Dashboard stats and notifications update in real-time.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Style

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the development team.

---

**Note**: This admin dashboard connects to the main freight application deployed at `https://clerk-react-lac.vercel.app` for API testing and integration.

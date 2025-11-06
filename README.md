# Netflix Clone

A modern, responsive Netflix clone built with Next.js that displays movies and TV series from The Movie Database (TMDB) API. Features interactive carousels, detailed modals, real-time search, and comprehensive testing.

## 🚀 Features

- **Browse Content**: Explore popular, trending, and top-rated movies and TV series
- **Interactive Carousels**: Smooth horizontal scrolling carousels using Swiper
- **Detailed Modals**: View comprehensive information including cast, genres, ratings, and runtime
- **Real-time Search**: Search functionality across all movies and series
- **Responsive Design**: Fully responsive design optimized for mobile and desktop
- **API Integration**: Seamless integration with TMDB API using React Query
- **Loading States**: Professional loading indicators and error handling
- **State Management**: Context API for managing selected movies and series

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 (with Turbopack)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Data Fetching**: TanStack React Query v5.90.5
- **Carousels**: Swiper v12.0.3
- **Testing**: Jest v30.2.0, React Testing Library v16.3.0
- **Linting**: ESLint with Next.js configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun
- A TMDB API key (get one at [TMDB](https://www.themoviedb.org/settings/api))

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd netflix
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_API_KEY=your_tmdb_api_key_here
```

4. Replace `your_tmdb_api_key_here` with your actual TMDB API key.

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## 🧪 Testing

This project includes comprehensive testing with Jest and React Testing Library:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

The test suite includes:

- Component rendering tests
- User interaction tests
- Functionality tests (click, search, modals)
- Responsive design tests

## 📁 Project Structure

```
netflix/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.js     # Root layout with providers
│   │   └── page.js       # Home page
│   ├── components/       # React components
│   │   ├── movies/       # Movie-related components
│   │   └── series/       # Series-related components
│   ├── hooks/            # Custom React hooks
│   │   ├── movies/       # Movie hooks
│   │   └── series/       # Series hooks
│   ├── services/         # API services
│   └── utils/            # Utility functions
├── __tests__/            # Test files
├── public/               # Static assets
└── coverage/             # Test coverage reports
```

## 🎨 Key Components

- **NetflixLandingComponent**: Main landing page with all carousels and modals
- **MovieSwiperComponent**: Horizontal scrolling carousel for movies
- **SeriesSwiperComponent**: Horizontal scrolling carousel for series
- **MovieCard/SeriesCard**: Individual movie/series cards
- **MovieHeaderInfoComponent**: Hero section with backdrop image
- **MovieBodyInfoComponent**: Detailed information display

## 🔑 API Integration

The project uses The Movie Database (TMDB) API to fetch:

- Popular movies and series
- Trending content
- Top-rated movies and series
- Detailed movie/series information
- Cast and credits
- Genres and metadata

## 📝 Environment Variables

Make sure to set the following environment variables:

- `NEXT_PUBLIC_API_URL`: TMDB API base URL (default: `https://api.themoviedb.org/3`)
- `NEXT_PUBLIC_API_KEY`: Your TMDB API key (required)

## 🎯 Features in Detail

### Movie & Series Display

- Three categories: Popular, Trending, and Top Rated
- Separate sections for movies and series
- High-quality poster images from TMDB

### Interactive Features

- Click on any movie/series card to view details
- Double-click to open detailed modal
- Search bar filters content in real-time
- Smooth animations and transitions

### Detailed Information

- Movie/Series overview
- Cast information with character names
- Genre tags
- Release year, runtime, and ratings
- High-quality backdrop images

## 📄 License

This project is private and for portfolio/educational purposes.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

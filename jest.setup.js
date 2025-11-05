// Importa las utilidades de testing-library para hacer asseriones con DOM
import "@testing-library/jest-dom";

// Mock de Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock de Swiper
jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Navigation: {},
  Pagination: {},
}));

// Mock de archivos CSS
jest.mock("swiper/swiper.css", () => ({}));

jest.mock("swiper/css", () => ({}));

// Mock global de fetch para evitar llamadas reales a API
global.fetch = jest.fn();

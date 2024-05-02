import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500"],
});

export const metadata = {
  title: "TruEvo",
  description: "Another innovative company from Sweden",
  icons:
    "data:image/svg+xml,<svg width='97' height='97' viewBox='0 0 97 97' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.790039 16.7615C0.790039 7.9248 7.95361 0.76123 16.7903 0.76123H80.7897C85.0333 0.76123 89.103 2.44696 92.1037 5.4476C95.1043 8.44824 96.79 12.518 96.79 16.7615V80.7609C96.79 89.5976 89.6264 96.7612 80.7897 96.7612H16.7903C7.95361 96.7612 0.790039 89.5976 0.790039 80.7609V16.7615Z' fill='url(#paint0_linear_0_1)'/><path d='M68.8018 23.2231C69.6143 23.2231 70.3278 23.3065 70.9424 23.4731C71.5674 23.6294 72.0674 24.02 72.4424 24.645C72.8278 25.2596 73.0205 26.2492 73.0205 27.6138C73.0205 28.9679 72.8278 29.9575 72.4424 30.5825C72.0674 31.1971 71.557 31.5721 70.9111 31.7075C70.2653 31.8429 69.5309 31.9106 68.708 31.9106H53.7549V75.27C53.7549 76.1867 53.6559 77.0148 53.458 77.7544C53.2705 78.4836 52.8382 79.0617 52.1611 79.4888C51.484 79.9263 50.359 80.145 48.7861 80.145C47.3278 80.145 46.2445 79.9159 45.5361 79.4575C44.8278 78.9992 44.3903 78.4054 44.2236 77.6763C44.0674 76.9367 43.9893 76.1086 43.9893 75.1919V31.9106H28.8643C28.1038 31.9106 27.3955 31.8325 26.7393 31.6763C26.0934 31.5096 25.5674 31.1294 25.1611 30.5356C24.7549 29.9419 24.5518 28.9679 24.5518 27.6138C24.5518 26.2492 24.7393 25.2596 25.1143 24.645C25.4997 24.02 26.0309 23.6294 26.708 23.4731C27.3851 23.3065 28.1038 23.2231 28.8643 23.2231H68.8018Z' fill='white'/><defs><linearGradient id='paint0_linear_0_1' x1='-23.2267' y1='90.3208' x2='90.3496' y2='120.778' gradientUnits='userSpaceOnUse'><stop stop-color='#DF0677'/><stop offset='0.17' stop-color='#FC44A4'/><stop offset='0.37' stop-color='#564EFA'/><stop offset='0.55' stop-color='#3830E8'/><stop offset='0.7' stop-color='#564EFA'/><stop offset='0.85' stop-color='#3BF9B5'/><stop offset='1' stop-color='#32CE97'/></linearGradient></defs></svg>",
  keywords: [
    "health",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable}`}>
        {children}
      </body>
    </html>
  );
}

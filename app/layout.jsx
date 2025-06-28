import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import { FaLink } from "react-icons/fa6";

export const Metadata = {
  title: {
    template: "%s | Link-Sharing",
    default: "Link-Sharing",
  },
  description: "Build and share your links",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} bg-light-grey antialiased`}>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#333333",
              color: "#fafafa",
              fontSize: "16px",
              fontWeight: "bold",
            },
            success: {
              icon: <FaLink className="text-grey text-2xl" />,
            },
          }}
        />
      </body>
    </html>
  );
}

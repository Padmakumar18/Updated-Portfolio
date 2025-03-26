import myPhoto from "./assets/MyPicture.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";
import quotes from "./data/quotes";

export default function Profile() {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white">
      <div className="text-center md:text-left">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-teal-400 Name">Padma Kumar</p>
        <p className="text-md md:text-lg mt-3">padmakumar23.dev@gmail.com</p>
        <button className="mt-5 px-6 py-2 resumeButton text-white font-semibold rounded-lg">
          <a
            href="https://drive.google.com/file/d/1SPi2P_IyWuxD9ugAFfQl34aCGpEq_qjq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
        <p className="text-md md:text-lg mt-4 italic">"{quote.quote}"</p>
        <p className="text-md md:text-lg font-semibold mt-2">- {quote.author}</p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <LazyLoadImage
          src={myPhoto}
          alt="Profile"
          className="w-20 h-20 md:w-60 md:h-60 lg:w-60 lg:h-60 rounded-full object-cover filter brightness-90 transition-transform duration-300 hover:scale-110 MyPicture"
        />
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (audio) {
      audio.play().catch(() => console.log("Autoplay blocked"));
    }
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center p-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[500px] bg-white opacity-10 rounded-full"
        />
      </div>

      {/* Title Animation */}
      <motion.h1
        className="text-6xl font-extrabold animate-bounce"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hai Sayang 💖
      </motion.h1>

      {/* Description Animation */}
      <motion.p
        className="mt-4 text-xl max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Setiap detik bersamamu adalah anugerah yang selalu aku syukuri <br />
        Hari ini adalah hari yang spesial, Hari ini adalah harimu. <br />
        Buka surat di bawah ini ya sayang 💌
      </motion.p>

      {/* Animated Letter Icon */}
      <Link to="/letter">
        <motion.div
          className="mt-6 p-4 bg-white text-purple-600 rounded-full shadow-lg cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.1 }}
        >
          {hovered ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l8 6v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9l8-6zm0 2.2L6 9v10h12V9l-6-3.8zM8 14h8v2H8v-2z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          )}
        </motion.div>
      </Link>


      <audio id="bg-music" autoPlay loop>
        {/* <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" /> */}
        <source src="https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-viii/120%20Julia.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
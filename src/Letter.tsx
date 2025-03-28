import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Letter() {
    const [showPopup, setShowPopup] = useState(false);
    
    useEffect(() => {
        const audio = document.getElementById("bg-music") as HTMLAudioElement;
        if (audio) {
          audio.play().catch(() => console.log("Autoplay blocked"));
        }
      }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-pink-600 text-white text-center p-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[400px] h-[400px] bg-white opacity-10 rounded-full"
        />
      </div>

      {/* Title Animation */}
      <motion.h1
        className="text-5xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Love Letter to You 💌
      </motion.h1>

      {/* Letter Content Animation */}
      <motion.p
        className="mt-6 text-xl max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        My dearest love,  
        We've shared **3 wonderful years** together, filled with joy, love, and dreams.  
        I know times have been hard, and I feel sorry for not fulfilling my role as I should.  
        But one thing is certain—**I love you more than words can say**.  
        Thank you for standing by my side, for your patience, and for your endless love.  
        You are my everything. ❤️
      </motion.p>

      {/* Love Icon with Popup */}
      <div className="mt-8 flex items-center space-x-4">
        <p className="text-lg font-semibold text-white">Click Me</p>
        <motion.button
            className="p-4 bg-white text-red-600 rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowPopup(true)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </motion.button>
        <p className="text-lg font-semibold text-white">Click Me</p>
        </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-white text-red-600 p-6 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg font-semibold">Thank you for everything until now,</p>
            <p className="text-lg font-semibold">Let's do the best forward. 💖</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}


      <audio id="bg-music" autoPlay loop>
        {/* <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" /> */}
        <source src="https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-viii/120%20Julia.mp3" type="audio/mpeg" />
      </audio>

      {/* Back Button */}
      <Link to="/">
        <motion.button
            className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-red-100"
            whileHover={{ scale: 1.1 }}
        >
            Go Back
        </motion.button>
        </Link>

    </div>
  );
}
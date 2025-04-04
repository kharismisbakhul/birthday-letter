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
        className="text-3xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Surat Cinta untuk Manda Istriku 💌
      </motion.h1>

      {/* Letter Content Animation */}
      <motion.p
        className="mt-6 text-md max-w-2xl leading-relaxed overflow-y-auto max-h-[400px] custom-scroll-hidden border border-gray-300 p-6 rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        // style={{ whiteSpace: "pre-wrap" }}
      >
        Untuk istriku tercinta, <br /><br />

        Hari ini, 4 April, adalah hari yang paling istimewa bagiku, <br />
        karena pada hari ini, 26 tahun yang lalu, dunia <br />
        dianugerahi kehadiranmu—seseorang yang paling berharga dalam hidupku. <br /><br />

        Aku ingin mengawali surat ini <br />
        dengan satu hal yang paling ingin kusampaikan: <br />
        <strong>Terima kasih, sayang.</strong> <br /><br />

        Terima kasih telah menjadi cahaya dalam hari-hariku, <br />
        terutama di saat-saat tergelap dalam hidupku. <br /><br />

        Aku tahu belakangan ini bukanlah masa yang mudah bagi kita. <br />
        Aku masih berjuang, masih mencari jalan, <br />
        dan belum bisa menjadi suami yang mampu memenuhi semua tanggung jawab seperti yang seharusnya. <br />
        Tapi satu hal yang pasti, <br />
        aku tidak akan pernah menyerah. <br />
        Karena kamu ada di sini, <br />
        karena cintamu yang tulus selalu menguatkanku. <br /><br />

        Aku sering merasa bersalah, merasa gagal, merasa tidak cukup baik untukmu. <br />
        Tapi kamu selalu ada, mendukungku tanpa mengeluh, <br />
        tetap tersenyum meskipun aku tahu kamu pun lelah. <br /><br />

        Aku tidak bisa membayangkan hidup tanpamu, <br />
        tanpa kasih sayangmu yang selalu membuatku merasa cukup <br />
        meski keadaan belum seperti yang kita harapkan. <br /><br />

        Di hari ulang tahunmu ini, aku ingin berjanji. <br />
        Aku berjanji akan selalu berusaha agar kita bisa lepas dari masalah yang kita hadapi sekarang. <br />
        Aku akan terus bekerja keras untuk masa depan kita dan anak-anak kita kelak. <br />
        Aku akan terus memperbaiki diri, untukmu, untuk keluarga kita. <br />
        Aku ingin kamu bahagia, karena kamu layak mendapatkan semua kebahagiaan di dunia ini. <br /><br />

        Selamat ulang tahun, sayangku. <br />
        Semoga semua doa dan harapanmu dikabulkan. <br />
        Semoga kita dianugerahi keturunan yang lucu, cerdas, sholeh, sholehah. <br />
        Semoga di tahun ini, kebahagiaan selalu menyertaimu, <br />
        dan semoga aku bisa menjadi alasan utama senyummu tetap ada setiap hari. <br />
        Aku cinta dan sayang padamu, lebih dari yang bisa diungkapkan oleh kata-kata. <br /><br />

        Tertanda, <br />
        Suami Semokmu yang akan segera Kembali menjadi Suami Idamanmu, <br />
        Kharis ❤️<br />
      </motion.p>

      {/* Love Icon with Popup */}
      <div className="mt-8 flex items-center space-x-4">
        <p className="text-lg font-semibold text-white">Klik Aku</p>
        <motion.button
          className="p-4 bg-white text-red-600 rounded-full shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowPopup(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.button>
        <p className="text-lg font-semibold text-white">Klik Aku</p>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            className="bg-white text-red-600 p-6 rounded-2xl shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* 2 Kolom dengan Border Minimalis & Centered Content */}
            <div className="grid grid-cols-2 gap-4 border border-gray-300 p-4 rounded-lg">
              <div className="flex flex-col items-center justify-center border-r border-gray-300 p-4">
                <p className="text-xs font-semibold text-center">
                  Terima kasih untuk segalanya sampai saat ini. <br />
                  Terima kasih telah selalu ada di sampingku, <br />
                  apapun kondisiku.{" "}
                  <br />
                  Di setiap detik, di setiap langkah, <br />
                  rasa cinta dan sayangku akan selalu tumbuh.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-xs font-semibold text-center">
                  Semoga kebahagiaan selalu menyertaimu, <br />
                  menyertai kita. <br />
                  Dan bersama-sama, <br />
                  kita akan melewati setiap tantangan <br />
                  untuk membangun masa depan yang lebih indah <br />
                  Lebih indah dan luar biasa dari hari ini, <br />
                  Masa depan yang kita cita-citakan kan bersama. 💖
                </p>
              </div>
            </div>
            <br/>

            {/* Foto Pernikahan */}

            {/* Foto dalam Dua Kolom */}
            <div className="grid grid-cols-2 gap-4 border border-gray-300 p-4 rounded-lg">
              {/* Kolom Kiri - Foto Akad Nikah */}
              <div className="flex flex-col items-center justify-center border-r border-gray-300 p-4">
                <img
                  src="/kharismanda_2.jpeg"
                  alt="Akad Nikah Kita"
                  className="w-40 h-52 rounded-lg shadow-md object-cover"
                />
                <p className="mt-2 text-xs text-gray-600 italic text-center">
                  "Saat akad terucap, kita bukan lagi dua, tapi satu.  
                  Satu hati, satu tujuan, dan satu perjalanan seumur hidup.  
                  Semoga janji suci ini selalu menjadi pengingat bahwa kita akan selalu bersama,  
                  dalam suka dan duka, hingga akhir hayat."
                </p>
              </div>

              {/* Kolom Kanan - Foto Resepsi Pernikahan */}
              <div className="flex flex-col items-center justify-center p-4">
                <img
                  src="/kharismanda_1.jpeg"
                  alt="Resepsi Pernikahan Kita"
                  className="w-52 h-32 rounded-lg shadow-md object-cover"
                />
                <p className="mt-2 text-xs text-gray-600 italic text-center">
                  "Hari di mana kita berbagi kebahagiaan dengan semua orang.  
                  Semoga kebahagiaan yang kita rasakan di hari itu,  
                  selalu kita jaga dan semakin tumbuh di setiap langkah perjalanan kita.  
                  Bersama, kita akan membangun kehidupan yang penuh cinta, harapan, dan impian yang terwujud."
                </p>
              </div>
            </div>

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Tutup
            </button>
          </motion.div>
        </div>
      )}

      <audio id="bg-music" autoPlay loop>
        {/* <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" /> */}
        <source
          src="https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-viii/120%20Julia.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Back Button */}
      <Link to="/">
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-red-100"
          whileHover={{ scale: 1.1 }}
        >
          Kembali
        </motion.button>
      </Link>
    </div>
  );
}

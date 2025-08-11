import { GameOverScreen, GameScreen, GraduationScreen, StartScreen } from "@/components";
import { useEffect, useState } from "react";

type GameData = {
  nama: string;
  jurusan: string;
  semester: number;
  ipk: number;
  mental: number;
  uang: number;
  gameOver: boolean;
};

export default function GamePage() {
  const [game, setGame] = useState<GameData | null>(null);
  const [eventMessage, setEventMessage] = useState<string | null>(null);

  // Load progress
  useEffect(() => {
    const saved = localStorage.getItem("gameData");
    if (saved) setGame(JSON.parse(saved));
  }, []);

  // Save progress
  useEffect(() => {
    if (game) {
      localStorage.setItem("gameData", JSON.stringify(game));
    }
  }, [game]);

  const startGame = (nama: string, jurusan: string) => {
    setGame({
      nama,
      jurusan,
      semester: 1,
      ipk: 3.0,
      mental: 70,
      uang: 4000000, // modal awal realistis
      gameOver: false,
    });
  };

  const triggerRandomEvent = (stats: GameData) => {
    const events = [
      { msg: "Dapat beasiswa! (+Rp3.000.000)", effect: (g: GameData) => ({ ...g, uang: g.uang + 3000000 }) },
      { msg: "Dosen killer masuk mengajar! (-0.3 IPK)", effect: (g: GameData) => ({ ...g, ipk: +(g.ipk - 0.3).toFixed(2) }) },
      { msg: "Putus cinta! (-20 Mental)", effect: (g: GameData) => ({ ...g, mental: g.mental - 20 }) },
      { msg: "Menang lomba! (+15 Mental, +Rp1.500.000)", effect: (g: GameData) => ({ ...g, mental: g.mental + 15, uang: g.uang + 1500000 }) },
    ];
    if (Math.random() < 0.5) { // 50% chance event terjadi
      const chosen = events[Math.floor(Math.random() * events.length)];
      setEventMessage(chosen.msg);
      return chosen.effect(stats);
    }
    setEventMessage(null);
    return stats;
  };

  const nextSemester = (action: string) => {
    if (!game || game.gameOver) return;

    let { ipk, mental, uang, semester } = game;

    switch (action) {
      case "belajar":
        ipk = Math.min(4, ipk + +(Math.random() * 0.2 + 0.1).toFixed(2));
        mental -= Math.floor(Math.random() * 11) + 5;
        uang -= 500000; // biaya buku, print, jajan
        break;
      case "organisasi":
        ipk -= +(Math.random() * 0.2).toFixed(2);
        mental += Math.floor(Math.random() * 11) + 5;
        uang -= 800000; // kontribusi, acara
        break;
      case "kerja":
        ipk -= +(Math.random() * 0.2).toFixed(2);
        mental -= Math.floor(Math.random() * 6) + 5;
        uang += Math.floor(Math.random() * 2000001) + 2000000; // gaji part time 2-4 juta
        break;
      case "rebahan":
        ipk -= +(Math.random() * 0.2 + 0.1).toFixed(2);
        mental += Math.floor(Math.random() * 6) + 5;
        uang -= 300000; // makan, hiburan ringan
        break;
    }

    let newGame: GameData = { ...game, ipk: +ipk.toFixed(2), mental, uang, semester: semester + 1 };

    // Event acak
    newGame = triggerRandomEvent(newGame);

    // Cek Game Over
    if (newGame.ipk < 2.0 || newGame.mental <= 0 || newGame.uang < 0) {
      newGame.gameOver = true;
    }

    setGame(newGame);
  };

  const resetGame = () => {
    localStorage.removeItem("gameData");
    setGame(null);
    setEventMessage(null);
  };

  if (!game) return <StartScreen onStart={startGame} />;
  if (game.gameOver) return <GameOverScreen game={game} onRestart={resetGame} />;
  if (game.semester > 8) return <GraduationScreen game={game} onRestart={resetGame} />;
  return <GameScreen game={game} onAction={nextSemester} eventMessage={eventMessage} />;
}

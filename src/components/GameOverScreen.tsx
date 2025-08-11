type GameOverProps = {
    game: {
        ipk: number;
        mental: number;
        uang: number;
    };
    onRestart: () => void;
};

export default function GameOverScreen({ game, onRestart }: GameOverProps) {
    const reasons: string[] = [];

    if (game.ipk < 2.0) {
        reasons.push("📚 IPK jeblok! Kampus mengirimmu surat cinta berisi kata 'Drop Out'.");
    }
    if (game.mental <= 0) {
        reasons.push("🧠 Mental ambyar! Kamu memilih rebahan seumur hidup sambil merenung nasib.");
    }
    if (game.uang < 0) {
        reasons.push("💸 Dompet bolong! Warteg langganan pun menolak utangmu.");
    }

    const finalReason =
        reasons.length > 0
            ? reasons.join(" ")
            : "🤷 Entah kenapa, kamu keluar dari dunia perkuliahan secara misterius.";

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-4">💀 Game Over</h1>
                <p className="mb-2">IPK: {game.ipk}</p>
                <p className="mb-2">Mental: {game.mental}</p>
                <p className="mb-2">
                    Uang:{" "}
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0
                    }).format(game.uang)}
                </p>
                <p className="text-gray-700 italic mb-4">{finalReason}</p>
                <button
                    onClick={onRestart}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Main Lagi
                </button>
            </div>
        </div>
    );
}

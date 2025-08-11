type GameData = {
    nama: string;
    jurusan: string;
    semester: number;
    ipk: number;
    mental: number;
    uang: number;
    gameOver: boolean;
};

type GameScreenProps = {
    game: GameData;
    onAction: (action: string) => void;
    eventMessage: string | null;
};

export default function GameScreen({ game, onAction, eventMessage }: GameScreenProps) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-xl font-bold mb-4 text-center">📚 Semester {game.semester}</h1>
                <p className="mb-2">Nama: <b className="capitalize">{game.nama}</b> ({game.jurusan})</p>
                <p className="mb-1">IPK: {game.ipk}</p>
                <p className="mb-1">Mental: {game.mental}</p>
                <p className="mb-4">Uang: {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(game.uang)}</p>

                {eventMessage && (
                    <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-3 rounded mb-4">
                        {eventMessage}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => onAction("belajar")}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        Rajin Belajar
                    </button>
                    <button
                        onClick={() => onAction("organisasi")}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Ikut Organisasi
                    </button>
                    <button
                        onClick={() => onAction("kerja")}
                        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
                    >
                        Kerja Part-time
                    </button>
                    <button
                        onClick={() => onAction("rebahan")}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                    >
                        Rebahan
                    </button>
                </div>
            </div>
        </div>
    );
}

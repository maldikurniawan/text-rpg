type GameOverProps = {
    game: {
        ipk: number;
        mental: number;
        uang: number;
    };
    onRestart: () => void;
};

export default function GameOverScreen({ game, onRestart }: GameOverProps) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-4">💀 Game Over</h1>
                <p className="mb-2">IPK: {game.ipk}</p>
                <p className="mb-2">Mental: {game.mental}</p>
                <p className="mb-4">Uang: Rp{game.uang}k</p>
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

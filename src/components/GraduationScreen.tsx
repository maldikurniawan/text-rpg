type GraduationProps = {
    game: {
        nama: string;
        jurusan: string;
        ipk: number;
    };
    onRestart: () => void;
};

export default function GraduationScreen({ game, onRestart }: GraduationProps) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-2xl font-bold text-green-500 mb-4 capitalize">🎉 Selamat {game.nama}!</h1>
                <p className="mb-2">
                    Kamu lulus dari jurusan <b>{game.jurusan}</b> dengan IPK {game.ipk}.
                </p>
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

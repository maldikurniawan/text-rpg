type StartScreenProps = {
    onStart: (nama: string, jurusan: string) => void;
};

export default function StartScreen({ onStart }: StartScreenProps) {
    const jurusanList = [
        "Teknik Informatika",
        "Kedokteran",
        "Akuntansi",
        "Teknik Sipil"
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    🎓 Simulator Mahasiswa Baru
                </h1>
                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const nama = (e.currentTarget.elements.namedItem("nama") as HTMLInputElement).value;
                        const jurusan = (e.currentTarget.elements.namedItem("jurusan") as HTMLSelectElement).value;
                        onStart(nama, jurusan);
                    }}
                >
                    {/* Input Nama */}
                    <input
                        name="nama"
                        placeholder="Nama"
                        required
                        className="w-full px-4 py-2 border capitalize rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />

                    {/* Select Jurusan */}
                    <select
                        name="jurusan"
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        {jurusanList.map((j) => (
                            <option key={j} value={j}>
                                {j}
                            </option>
                        ))}
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Mulai Game
                    </button>
                </form>
            </div>
        </div>
    );
}

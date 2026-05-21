const data = [
      {
        nama: "Andi",
        paket: "Paket Bali",
        tanggal: "10 Mei 2026",
        jumlah: 2
      },
      {
        nama: "Budi",
        paket: "Paket Bandung",
        tanggal: "15 Mei 2026",
        jumlah: 4
      }
    ];

    // Menampilkan data ke tabel
    const table = document.getElementById("dataTable");

    data.forEach((item, index) => {
      table.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${item.nama}</td>
          <td>${item.paket}</td>
          <td>${item.tanggal}</td>
          <td>${item.jumlah}</td>
        </tr>
      `;
    });

    // Tombol selesai
    function selesai(){
      alert("Data berhasil dikonfirmasi!");
    }

    // Logout
    function logout(){
      alert("Anda berhasil logout!");
    }
let nomor = 1;

  function tambahData(){

    let nama = document.getElementById("nama").value;
    let paket = document.getElementById("paket").value;
    let tanggal = document.getElementById("tanggal").value;
    let jumlah = document.getElementById("jumlah").value;

    if(nama == "" || tanggal == "" || jumlah == ""){
      alert("Harap isi semua data!");
      return;
    }

    let table = document.getElementById("tableData");

    table.innerHTML += `
      <tr>
        <td>${nomor++}</td>
        <td>${nama}</td>
        <td>${paket}</td>
        <td>${tanggal}</td>
        <td>${jumlah}</td>
      </tr>
    `;

    // Reset form
    document.getElementById("nama").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("jumlah").value = "";

  }

  function logout(){
    alert("Anda berhasil logout!");
  }
function register(event){
    event.preventDefault();

    // Mengambil nilai berdasarkan ID di HTML pendaftaran
    let nama = document.getElementById("username").value.trim(); 
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(nama == "" || email == "" || password == ""){
        alert("Semua data harus diisi");
        return;
    }

    let akun = JSON.parse(localStorage.getItem("akun")) || [];
    let cek = akun.find(user => user.email === email);

    if(cek){
        alert("Email sudah terdaftar");
        return;
    }

    // SIMPAN MENGGUNAKAN NAMA PROPERTI "username" AGAR SINKRON SAAT LOGIN
    akun.push({
        username: nama, // Diubah menjadi username
        email: email,
        password: password
    });

    localStorage.setItem("akun", JSON.stringify(akun));
    alert("Registrasi berhasil! Silakan Login.");
    window.location.href = "login.html"; 
}

// Hubungkan ke form registrasi
document.getElementById("formRegister").onsubmit = register;
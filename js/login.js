function login(event){
    event.preventDefault();

    let inputUser = document.getElementById("username").value.trim();
    let inputPassword = document.getElementById("password").value.trim();
    let inputLevel = document.getElementById("level").value;

    if(inputUser === "" || inputPassword === "" || inputLevel === ""){
        alert("Username, password, dan level akses harus diisi");
        return;
    }

    // LOGIKA KHUSUS ADMIN BYPASS
    if (inputUser === "admin" && inputPassword === "admin1234" && inputLevel === "Admin") {
        alert("Login Admin Berhasil");
        window.location.href = "admin.html";
        return;
    }

    let akun = JSON.parse(localStorage.getItem("akun")) || [];

    // SEKARANG SINKRON: u.username cocok dengan pendaftaran di atas
    let user = akun.find(function(u){
        return u.username === inputUser && u.password === inputPassword;
    });

    if(!user || inputLevel !== "User"){
        alert("Username, password, atau level akses salah!");
        return;
    }

    alert("Login berhasil! Selamat datang " + user.username);
    localStorage.setItem("userLogin", JSON.stringify(user));
    window.location.href = "user.html"; 
}

// Hubungkan ke form login
document.getElementById("formLogin").onsubmit = login;
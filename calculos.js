
function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    if (email.toLowerCase() == "123@kkk.com" && senha == "1234") {
        alert("login realizado com sucesso");
    } else {
        alert("login incorreto")
    }
}
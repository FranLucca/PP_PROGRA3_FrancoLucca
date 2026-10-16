const jsonUsuarios = `[
    {"id":1,"name":"Lionel Messi","username":"GOAT","email":"Messi@gmail.com","phone":"11 5673-9893 x56442"},
    {"id":2,"name":"Franco Lucca","username":"Frann","email":"franlucca@gmail.com","phone":"11 6967-8343 x09125"},
    {"id":3,"name":"Elon Musk","username":"Elon","email":"ElonMusk@gmail.com","phone":"11 5813-9895 x56982"},
    {"id":4,"name":"Cristiano Ronaldo","username":"CR7","email":"CrisRonaldo@gmail.com","phone":"11 5555-1234 x156"},
    {"id":5,"name":"Gustavo Cerati","username":"Cerati","email":"CeratiGustavo@gmail.com","phone":"11 4567 8901"},
    {"id":6,"name":"Javier Rodriguez Gallardo","username":"Profe Xabi","email":"profexabi@gmail.com","phone":"11 1234-7893 x6430"},
    {"id":7,"name":"Miguel Angel Chavez","username":"Profe Miguel","email":"profeMiguel@gmail.com","phone":"11 8965-7341"},
    {"id":8,"name":"Neymar Junior","username":"Ney","email":"neymar@gmail.com","phone":"11 2343-5648 x140"},
    {"id":9,"name":"Diego Maradona","username":"Diegote","email":"Maradona@gmail.com","phone":"11 1234-5698 x41206"},
    {"id":10,"name":"Andres Calamaro","username":"Andrelo","email":"CalamaroAndres@gmail.com","phone":"11 1122-5543"}
]`;
const usuarios = JSON.parse(jsonUsuarios);
// localStorage.setItem("usuarios", JSON.stringify(usuarios));
const usuariosDesdeLocal = JSON.parse(localStorage.getItem("usuarios"));
console.table(usuariosDesdeLocal);
const tituloUsers = document.querySelector("#titulo-users");
const contenedor = document.querySelector("#users-container");
const mostrarUsuarios = () => {
    let tabla = "<table>";
    tabla += "<thead><tr>";
    tabla += '<th><input type="checkbox"></th>';
    tabla += "<th>Icono</th>";
    tabla += "<th>Username</th>";
    tabla += "<th>Name</th>";
    tabla += "<th>Phone</th>";
    tabla += "<th>Email</th>";
    tabla += "</tr></thead><tbody>";
    usuariosDesdeLocal.forEach(usuario => {
        tabla += "<tr>";
        tabla += '<td><input type="checkbox"></td>';
        tabla += '<td><img src="img/icono.png" alt="Icono de usuario" width="35"></td>';
        tabla += `<td>${usuario.username}</td>`;
        tabla += `<td>${usuario.name}</td>`;
        tabla += `<td>${usuario.phone}</td>`;
        tabla += `<td>${usuario.email}</td>`;
        tabla += "</tr>";
    });
    tabla += "</tbody></table>";
    contenedor.innerHTML = tabla;
};
tituloUsers.addEventListener("click", mostrarUsuarios);
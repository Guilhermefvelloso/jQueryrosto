// Array de cores para o rosto
const cores = ["yellow", "lightblue", "lightgreen", "pink", "orange", "purple"];

// Função que muda a cor do rosto
$("#mudar-cor").click(function() {
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    $("#rosto").css("background-color", corAleatoria);
});

//Calculadora de Partidas rankeadas

function calcularNivel(){

    let saldoVitorias = parseFloat(document.getElementById("vitorias").value);  
    let derrotas = parseFloat(document.getElementById("derrotas").value);  

    let nivel;

    function subtracao(a, b){
        return a - b;
    }

    if (derrotas < 10) {
        nivel = "Ferro";
    } else if (derrotas >= 11 && derrotas <= 20) {
        nivel = "Bronze";
    } else if (derrotas >= 21 && derrotas <= 50) {
        nivel = "Prata";
    } else if (derrotas >= 51 && derrotas <= 80) {
        nivel = "Ouro";
    } else if (derrotas >= 81 && derrotas <= 90) {
        nivel = "Diamante";
    } else if (derrotas >= 91 && derrotas <= 100) {
        nivel = "Lendário";
    } else{
        nivel = "Imortal"
    };
    
    
    document.getElementById("resultado").innerHTML = `O herói tem saldo de ${saldoVitorias} vitorias e está no nivel de ${nivel}`;
  
}    

    
    
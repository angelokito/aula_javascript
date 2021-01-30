


function clicar(){
    document.getElementById("agradecimento").innerHTML = "Mais uma vez, Obrigado por clicar!!";
     // console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!!");
}

function redirecionar(){    
    window.open("https://www.datascienceacademy.com.br/?msg=not-logged-in/");
    window.location.href = "https://www.udemy.com/";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Vai ser fresco na casa do diabo!";
   // alert("trocar texto")
   elemento.innerHTML = "Vai ver que horas são na catedral de Londres!";
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui outra vez!";
   elemento.innerHTML = "Passe o Mouse!";
}


function load(){
    alert("Pagina carregada corretamente!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}





/*
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }
    else {
        validar = false
    }
    return validar;
   
}

var idade = prompt("Qual sua idade? ")
console.log(validaIdade(idade));

*/



/*
function soma(n1,n2){
    return n1 + n2;

    
}

function setReplace(frase, nome ,novo_nome){
    return frase.replace(nome, novo_nome)

}

alert(soma(50,60));
alert (setReplace("Vai Japãoooo", "Japão", "Brasil"));
*/


/*var lista = ["Limão","mamão","banana"];
lista.push("laranja");
//lista.pop();
console.log(lista.length)
console.log(lista.toString());
console.log(lista);
*/

/*var  d = new Date();
alert(d.getMonth()+1);
*/

/*var count;
for(count = 0; count <=5;count++){
    alert(count);
};*/



/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count)
    count = count + 1;
};*/




/*var idade = prompt("Qual sua idade");

if(idade >=18){
    alert("Você pode entrar! Maior de idade")
}
else{
    alert("Acesso negado! Menor de idade!");
};*/



/*var frutas = [{nome: "Cajú", cor:"Amarelo/Vermelho"}, {nome:"Limão", cor:"Verde"},
              {nome: "Melão", cor:"Amarelo"}]
console.log(frutas);
alert(frutas[2].cor);*/

/*
var frutas = {nome: "cajú", cor:"Amarelo/Vermelho"}
console.log(frutas.nome);
alert(frutas.cor);
*/

/*var frutas = ["morango","pêra","maçã","melância","jaboticaba"]
console.log(frutas)
console.log(frutas.length)
console.log(frutas.join(" ││ "))
alert(frutas[2])*/

/*var nome = "Angelo Affonso Lopes"; 
var idade = 36;
var frase = "O Palmeiras não tem mundial"
 
console.log(nome);
console.log(idade);
console.log(frase);
console.log(frase.replace("não","tem ate dois"));
console.log(frase.toUpperCase())
alert (frase.replace("não", "tem ate dois"));
  */   
    

function helloWorld() {
    console.log("Olá Mundo");
};

const saudacao = () => {//  mesma  cois que: function  saudacao() {}
var data  = new Date();
    return data.getHours() <= 12? "Bom Dia!" : data.getHours() <= 18? "Boa Tarde!" : "Boa Noite!";
};

helloWorld();

console.log(`A saudação do momento é ` + saudacao());
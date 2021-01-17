const calculo=document.getElementById('calcular');
calculo.addEventListener('click',imc);
function imc(){
    let nome=document.getElementById('nome').value;
    let altura=document.getElementById('altura').value;
    let peso=document.getElementById('peso').value;
    let tela=document.getElementById('resultado');
    if (altura !== '' && peso !== ''){
        let calc=(peso/(altura*altura)).toFixed(1);
        let nivel=''
        if (calc<18.5){nivel='abaixo do peso'}
        else if (calc<25){nivel='com peso ideal'}
        else if (calc<30){nivel='levemente acima do peso'}
        else if (calc<35){nivel='obesidade grau 1'}
        else if (calc<40){nivel='obesidade gau 2'}
        else {nivel='obesidade grau 3, CUIDADO'}
        tela.innerHTML=`Olá ${nome}, seu IMC é ${calc}, e você está ${nivel}.`
    }else {tela.innerHTML='Faltam dados'}
};
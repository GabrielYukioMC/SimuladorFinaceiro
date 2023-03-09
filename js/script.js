// o valor das lampadas pode ser representada por 0.2 da conta de luz da empresa;
var textoPadrao = `<br>
<p>
     Agora você pode clicar no botão acima <span class="ver_economia_texto">"Ver economia"</span> para consultar quanto vai ficar o seu gasto iria ficar se sua empresa colocar o nosso sistema de luz inteligente
 </p>`;

function verGastos() {

    // Variaveis capturadas da empresa
    var nome = NomeEmpresa.value;
    var qtdHorasLuz = Number(horasDeLuz.value);
    var qtdLamp = Number(qtdLampadas.value);
    var qtdWatts = Number(Watts.value);
    var qtdDias = Number(dias.value);
    var valorKWh = Number(KWh.value);
    var qtdsalas = Number(salas.value);

    // -------------------- Calculo de gasto de energia sem o sistema --------------------

    var gastoPorLampada = (qtdHorasLuz * qtdWatts * qtdDias) / 1000; // calculo do gasto de uma lampada de WATTS pra KWh


    // -------------------- Calculo do gasto de todas as lampadas de uma sala --------------------
    var gastoTotalLampada = (gastoPorLampada * qtdLamp).toFixed(2); //calculo do gasto de todas as lampadas



    
    // -------------------- Calculo do preço final em R$(reais) -------------------- 
    var gastoFinal = (gastoTotalLampada * valorKWh).toFixed(2); //calculo do gasto final convertido pra reais(R$)

    var gastoAnual = (gastoFinal * 12).toFixed(2); // calculo do gasto no periodo de um ano

    // -------------------- Calculo do gasto final de todas as salas em R$(reais) -------------------- 
    var gastoAmbiente = (gastoFinal * qtdsalas).toFixed(2); // calculo dos gastos de todas as salas convertidos pra reais(R$)


    var gastoAnualAmbiente = (gastoAmbiente * 12).toFixed(2)// calculo do gasto de todas as salas no periodo de um ano
    // -------------------- Começo das verificações -------------------- 

    if (qtdLamp == 1) {

        if (qtdsalas == 1) {
            exibir.innerHTML = `
        <p>
            ${nome} O seu gasto por lampada ligada é de: <span> ${gastoPorLampada}Kwh</span>. <br>
            O que gera uma gasto de R$<span>  ${gastoFinal}</span>  por mês para a sua empresa<br>
            E o seu gasto anual é de R$<span> ${gastoAnualAmbiente}</span> .
        </p>
        `;
        } else {
            exibir.innerHTML = `
            <p>
                ${nome} O seu gasto por lampada ligada é de: <span> ${gastoPorLampada}</span> Kwh. <br>
                O que gera uma gasto de R$ <span> ${gastoFinal}</span>  por sala.<br>
                O gasto mensal de sua empresa é de R$<span> ${gastoAmbiente}</span> <br>
                E o seu gasto anual é de R$<span> ${gastoAnualAmbiente}</span> .
            </p>
           `;
        }

    } else {

        if (qtdsalas == 1) {
            exibir.innerHTML = `
        <p>
            ${nome} O seu gasto por lampada ligada é de:<span>  ${gastoPorLampada}Kwh</span>. <br>
            Com todas as suas lampadas ligadas você gasta: <span> ${gastoTotalLampada}KWh</span>. <br>
            O gasto final de sua empresa é de R$<span> ${gastoAmbiente}</span> <br>
            E o seu gasto anual é de R$<span> ${gastoAnual}</span>.
        </p>
       `;
        } else {
            exibir.innerHTML = `
        <p>
            ${nome} O seu gasto por lampada ligada é de: <span> ${gastoPorLampada}Kwh</span>. <br>
            Com todas as suas lampadas ligadas você gasta:<span>  ${gastoTotalLampada}KWh</span>. <br>
            O que gera uma gasto de R$ <span> ${gastoFinal}</span>  por sala.<br>
            O gasto final de sua empresa é de R$<span> ${gastoAmbiente}</span> <br>
            E o seu gasto anual é de R$<span> ${gastoAnualAmbiente}</span>.
        </p>
       `;
        }
    }



    // -------------------- Fim das verificações -------------------- 

    exibir.innerHTML += textoPadrao;
}


// function pra ver a economia da empresa que possui o nosso sistema

function verEconomia() {
    // variaveis capturadas da empresa

    var nome = NomeEmpresa.value;
    var qtdHorasLuz = Number(horasDeLuz.value);
    var qtdLamp = Number(qtdLampadas.value);
    var qtdWatts = Number(Watts.value);
    var qtdDias = Number(dias.value);
    var valorKWh = Number(KWh.value);
    var qtdsalas = Number(salas.value);

    // -------------------- Calculo de gasto de energia com o sistema --------------------

    var porcentagem_de_economia = 0.2;



    var gastoPorLampada = (((qtdHorasLuz * qtdWatts * qtdDias) / 1000) * porcentagem_de_economia).toFixed(2); // calculo do gasto de uma lampada de WATTS pra KWh


    // -------------------- Calculo do gasto de todas as lampadas de uma sala --------------------
    var gastoTotalLampada = (gastoPorLampada * qtdLamp).toFixed(2); //calculo do gasto de todas as lampadas


    // -------------------- Calculo do preço final em R$(reais) -------------------- 
    var gastoFinal = (gastoTotalLampada * valorKWh).toFixed(2); //calculo do gasto final convertido pra reais(R$)

    var gastoAnual = (gastoFinal * 12).toFixed(2); // calculo do gasto no periodo de um ano

    // -------------------- Calculo do gasto final de todas as salas em R$(reais) -------------------- 
    var gastoAmbiente = (gastoFinal * qtdsalas).toFixed(2); // calculo dos gastos de todas as salas convertidos pra reais(R$)


    var gastoAnualAmbiente = (gastoAmbiente * 12).toFixed(2)// calculo do gasto de todas as salas no periodo de um ano
    // -------------------- Começo das verificações -------------------- 



    if (qtdLamp == 1) {

        if (qtdsalas == 1) {
            exibir.innerHTML = `
        <p>
            ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span>Kwh por lampada ligada. <br>
            O que gera uma gasto de R$ <span>${gastoFinal}</span> por mês para a sua empresa<br>
            E o seu gasto anual é de R$<span>${gastoAnualAmbiente}</span>.
        </p>
        `;
        } else {
            exibir.innerHTML = `
            <p>
            ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span>Kwh por lampada ligada. <br>
                O que gera uma gasto de R$ <span>${gastoFinal} </span>por sala.<br>
                O gasto mensal de sua empresa é de R$<span>${gastoAmbiente}</span><br>
                E o seu gasto anual é de R$<span>${gastoAnualAmbiente}</span>.
            </p>
           `;
        }

    } else {

        if (qtdsalas == 1) {
            exibir.innerHTML = `
        <p>
        ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span>Kwh por lampada ligada. <br>
            Com todas as suas lampadas ligadas você gasta:<span> ${gastoTotalLampada}</span>KWh. <br>
            O gasto final de sua empresa é de R$<span>${gastoAmbiente}</span><br>
            E o seu gasto anual é de R$<span>${gastoAnual}</span>.
        </p>
       `;
        } else {
            exibir.innerHTML = `
        <p>
        ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span>Kwh por lampada ligada. <br>
            Com todas as suas lampadas ligadas você gasta:<span> ${gastoTotalLampada}</span>KWh. <br>
            O que gera uma gasto de R$ <span>${gastoFinal} </span>por sala.<br>
            O gasto final de sua empresa é de R$<span>${gastoAmbiente}</span><br>
            E o seu gasto anual é de R$<span>${gastoAnualAmbiente}</span>.
        </p>
       `;
        }
    }



    // -------------------- Fim das verificações -------------------- 

   
}
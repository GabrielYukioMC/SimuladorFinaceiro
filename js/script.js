

var textoPadrao = `
        <br><p>
            Agora você pode clicar no botão acima <span class="ver_economia_texto">"Ver economia"</span> para consultar quanto vai ficar o seu gasto iria ficar se sua empresa colocar o nosso sistema de luz inteligente
        </p>
    `;

function verGastos() {

    // Variaveis capturadas da empresa
    var nome = NomeEmpresa.value;//nome empresa
    var qtdHorasLuz = Number(horasDeLuz.value); // horas de luzes ligadas
    var qtdLamp = Number(qtdLampadas.value); // quantidade de lampadas
    var qtdWatts = Number(Watts.value); // potencia da lampada
    var qtdDias = Number(dias.value); // quantidade de dias de trabalho
    var valorKWh = Number(KWh.value); // preço do Kwh na região do cliente
    var qtdsalas = Number(salas.value); // quantidade de salas 

    // -------------------- Calculo de gasto de energia sem o sistema --------------------


    // -------------------- Calculo do gasto das as lampadas --------------------

    var gastoPorLampada = (qtdHorasLuz * qtdWatts * qtdDias) / 1000; // valor de uma lampada (W)

    var gastoTotalLampada = (gastoPorLampada * qtdLamp).toFixed(2);  // valor de todas as lampadas (W)


    // -------------------- Calculo do preço final em R$(reais) -------------------- 

    var gastoFinal = (gastoTotalLampada * valorKWh).toFixed(2); // valor do gasto em Reais no mês

    var gastoAnual = (gastoFinal * 12).toFixed(2); // valor do gasto em Reais no ano 

    // -------------------- Calculo do gasto final de todas as salas em R$(reais) -------------------- 

    var gastoAmbiente = (gastoFinal * qtdsalas).toFixed(2); // valor do gasto total por sala

    var gastoAnualAmbiente = (gastoAmbiente * 12).toFixed(2) // valor do gasto total por sala ao ano


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
        } if (qtdsalas != 1) {
            exibir.innerHTML = `
            <p>
                ${nome} O seu gasto por lampada ligada é de: <span> ${gastoPorLampada} </span> Kwh. <br>
                O que gera uma gasto de R$ <span> ${gastoFinal}</span>  por sala.<br>
                O gasto mensal de sua empresa é de R$<span> ${gastoAmbiente}</span> <br>
                E o seu gasto anual é de R$<span> ${gastoAnualAmbiente}</span> .
            </p>
           `;
        }

    } if (qtdLamp != 1) {

        if (qtdsalas == 1) {
            exibir.innerHTML = `
        <p>
            ${nome} O seu gasto por lampada ligada é de:<span>  ${gastoPorLampada} </span> Kwh. <br>
            Com todas as suas lampadas ligadas você gasta: <span> ${gastoTotalLampada}</span> Kwh. <br>
            O gasto final de sua empresa é de R$<span> ${gastoAmbiente}</span> <br>
            E o seu gasto anual é de R$<span> ${gastoAnual}</span>.
        </p>
       `;
        } if (qtdsalas != 1) {
            exibir.innerHTML = `
        <p>
            ${nome} O seu gasto por lampada ligada é de: <span> ${gastoPorLampada} </span> Kwh. <br>
            Com todas as suas lampadas ligadas você gasta:<span>  ${gastoTotalLampada}</span> KWh. <br>
            O que gera uma gasto de R$ <span> ${gastoFinal}</span>  por sala.<br>
            O gasto final de sua empresa é de R$<span> ${gastoAmbiente}</span> <br>
            E o seu gasto anual é de R$<span> ${gastoAnualAmbiente}</span>.
        </p>
       `;
        }
    }

    exibir.innerHTML += textoPadrao;
}


// function pra ver a economia da empresa que possui o nosso sistema

function verEconomia() {

    // Variaveis capturadas da empresa
    var nome = NomeEmpresa.value;//nome empresa
    var qtdHorasLuz = Number(horasDeLuz.value); // horas de luzes ligadas
    var qtdLamp = Number(qtdLampadas.value); // quantidade de lampadas
    var qtdWatts = Number(Watts.value); // potencia da lampada
    var qtdDias = Number(dias.value); // quantidade de dias de trabalho
    var valorKWh = Number(KWh.value); // preço do Kwh na região do cliente
    var qtdsalas = Number(salas.value); // quantidade de salas 


    // -------------------- Calculo de gasto de energia com o sistema --------------------

    var porcentagem_de_economia = 0.65; // porcentagem da economia 

    var gastoPorLampada = (((qtdHorasLuz * qtdWatts * qtdDias) / 1000) * porcentagem_de_economia).toFixed(2);  // valor do gasto por lampada com o sistema (W)

    var gastoPorLampadaSemEconomia = ((qtdHorasLuz * qtdWatts * qtdDias) / 1000); // valor do gasto por lampada (W)

    // -------------------- Calculo do gasto de todas as lampadas de uma sala --------------------

    var gastoTotalLampada = (gastoPorLampada * qtdLamp).toFixed(2); // gasto de todas as lampadas com sistema (W)

    var gastoTotalSemEconomia = (gastoPorLampadaSemEconomia * qtdLamp).toFixed(2); // gasto de todas as lampadas sem o sistema (W)


    // -------------------- Calculo do preço final em R$(reais) -------------------- 

    var gastoFinal = (gastoTotalLampada * valorKWh).toFixed(2); // valor do gasto em Reais no mês com o sistema (R$)

    var gastoSemEco = (gastoTotalSemEconomia * valorKWh).toFixed(2);  // valor do gasto em Reais no mês sem o sistema (R$)


    var gastoAnual = (gastoFinal * 12).toFixed(2);  // valor do gasto em Reais no ano com sistema (R$)


    // -------------------- Calculo do gasto final de todas as salas em R$(reais) -------------------- 
    var gastoAmbiente = (gastoFinal * qtdsalas).toFixed(2); // gasto total de todas as salas com o sistema
    var gastoSemEcoAmb = (gastoSemEco * qtdsalas).toFixed(2); // gasto total de todas as salas sem o sistema


    var gastoAnualAmbiente = (gastoAmbiente * 12).toFixed(2) // gasto anual com o sistema
    var gastoAnualAmbienteSemEconomia = (gastoSemEcoAmb * 12).toFixed(2); // gasto anual sem o sistema

    var eco = (gastoSemEcoAmb - gastoAmbiente).toFixed(2); // calculo da economia ao mês com o sistema
    var ecoAno = (gastoAnualAmbienteSemEconomia - gastoAnualAmbiente).toFixed(2); // calculo da economia ao ano com o sistema

    // -------------------- Começo das verificações -------------------- 



    if (qtdLamp == 1) {

        if (qtdsalas == 1) {
            exibir.innerHTML = `
            <p>
                ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span> Kwh por lampada ligada. <br>
                O que gera uma gasto de R$ <span>${gastoFinal}</span> por mês para a sua empresa<br>
                E o seu gasto anual é de R$<span>${gastoAnualAmbiente}</span><br><br>
                O que vai te render uma economia de R$<span>${eco}</span> ao mês e uma economia de R$<span> ${ecoAno} </span>ao ano.
            </p>
        `;
        } if (qtdsalas != 1) {
            exibir.innerHTML = `
            <p>
            ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span> Kwh por lampada ligada. <br>
                O que gera uma gasto de R$ <span>${gastoFinal} </span>por sala.<br>
                O gasto mensal de sua empresa é de R$<span>${gastoAmbiente}</span><br><br>
                O que vai te render uma economia de R$<span>${eco}</span> ao mês e uma economia de R$<span> ${ecoAno} </span>ao ano.
            </p>
           `;
        }

    } if (qtdLamp != 1) {

        if (qtdsalas == 1) {
            exibir.innerHTML = `
        <p>
        ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span> Kwh por lampada ligada. <br>
            Com todas as suas lampadas ligadas você gasta:<span> ${gastoTotalLampada}</span>KWh. <br>
            O gasto final de sua empresa é de R$<span>${gastoAmbiente}</span><br>
            E o seu gasto anual é de R$<span>${gastoAnual}</span><br><br>
            O que vai te render uma economia de R$<span>${eco}</span> ao mês e uma economia de R$<span> ${ecoAno} </span>ao ano.
        </p>
       `;
        } if (qtdsalas != 1) {
            exibir.innerHTML = `
        <p>
        ${nome} O seu gasto vai ser  de:<span> ${gastoPorLampada}</span> Kwh por lampada ligada. <br>
            Com todas as suas lampadas ligadas você gasta:<span> ${gastoTotalLampada}</span>KWh. <br>
            O que gera uma gasto de R$ <span>${gastoFinal} </span>por sala.<br>
            O gasto final de sua empresa é de R$<span>${gastoAmbiente}</span><br>
            E o seu gasto anual é de R$<span>${gastoAnualAmbiente}</span><br><br>
            O que vai te render uma economia de R$<span>${eco}</span> ao mês e uma economia de R$<span> ${ecoAno} </span>ao ano.
        </p>
       `;
        }
    }



    // -------------------- Fim das verificações -------------------- 


} s
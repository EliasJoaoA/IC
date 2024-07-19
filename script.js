function resolverEquacaoNitrogenio(tdh, rec, rmax1, Ci1, Ks1) {
    const Cx1 = (rec * Ci1 + Ci1) / (rec + 1);
    const resultado = Cx1 / (1 + (Cx1 / Ks1) * (rmax1 / tdh));
    return resultado;
}

function resolverEquacaoCarbono(tdh, rec, rmax2, Ci2, Ks2) {
    const Cx2 = (rec * Ci2 + Ci2) / (rec + 1);
    const resultado = Cx2 / (1 + (Cx2 / Ks2) * (rmax2 / tdh));
    return resultado;
}

function calcular() {
    const rmax1 = parseFloat(document.getElementById('rmax1').value);
    const Ci1 = parseFloat(document.getElementById('Ci1').value);
    const Ks1 = parseFloat(document.getElementById('Ks1').value);
    const rmax2 = parseFloat(document.getElementById('rmax2').value);
    const Ci2 = parseFloat(document.getElementById('Ci2').value);
    const Ks2 = parseFloat(document.getElementById('Ks2').value);

    const rec1 = document.getElementById('rec1').value.split(',').map(Number);
    const rec2 = document.getElementById('rec2').value.split(',').map(Number);

    let resultadosNitrogenio = '';
    let resultadosCarbono = '';

    rec1.forEach(rec => {
        resultadosNitrogenio += `<h3>Recirculação Nitrogênio: ${rec}</h3>`;
        for (let tdh = 0; tdh <= 1; tdh += 0.05) {
            const resultado = resolverEquacaoNitrogenio(tdh, rec, rmax1, Ci1, Ks1);
            resultadosNitrogenio += `<p>TDH: ${tdh.toFixed(2)} - Resultado: ${resultado.toFixed(2)}</p>`;
        }
    });

    rec2.forEach(rec => {
        resultadosCarbono += `<h3>Recirculação Carbono: ${rec}</h3>`;
        for (let tdh = 0; tdh <= 1; tdh += 0.05) {
            const resultado = resolverEquacaoCarbono(tdh, rec, rmax2, Ci2, Ks2);
            resultadosCarbono += `<p>TDH: ${tdh.toFixed(2)} - Resultado: ${resultado.toFixed(2)}</p>`;
        }
    });

    document.getElementById('resultados').innerHTML = `<h2>Resultados Nitrogênio</h2>${resultadosNitrogenio}<h2>Resultados Carbono</h2>${resultadosCarbono}`;
}
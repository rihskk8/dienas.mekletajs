function calculate() {
    const dz_date = new Date(document.getElementById('dz_date').value);
    const sis_date = new Date(document.getElementById('sis_date').value);
    const sis_n = parseInt(document.getElementById('sis_n').value);

    if (isNaN(sis_n) || sis_n < 1 || sis_n > 7) {
        alert('Lūdzu, ievadiet derīgu nedēļas dienu (1-7)!');
        return;
    }

    if (dz_date > sis_date) {
        alert('Dzimšanas datums nevar būt vēlāks par šodienas datumu!');
        return;
    }

    const diffTime = Math.abs(sis_date - dz_date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const dienu_nosaukumi = ["nekas", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena", "svētdiena"];
    const dz_diena = (sis_n - Math.floor(diffDays % 7) + 7) % 7;

    const result = `Kopš dzimšanas ir pagājušas ${diffDays} dienas. Jūsu nedēļas diena dzimšanas dienā bija ${dienu_nosaukumi[dz_diena]}.`;
    document.getElementById('result').innerText = result;
}

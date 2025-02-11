// Настройки для расчета
const cenaVzroslyy = 100; // Стоимость проживания для одного взрослого за день ($)
const cenaRebenok = 50;   // Стоимость проживания для ребенка за день ($)
const maxMesta = 50;      // Максимальное количество свободных мест в отеле

// Функция для расчета стоимости проживания
function raschitat() {
    // Получение данных из формы
    const zaezd = new Date(document.getElementById('zaezd').value);
    const vyezd = new Date(document.getElementById('vyezd').value);
    const vzroslye = parseInt(document.getElementById('vzroslye').value, 10);
    const deti = parseInt(document.getElementById('deti').value, 10);

    // Проверка на корректность дат
    if (zaezd >= vyezd) {
        alert("Дата выезда должна быть позже даты заезда!");
        return;
    }

    // Вычисление количества дней
    const raznitsaVremeni = vyezd - zaezd;
    const kolichestvoDney = Math.ceil(raznitsaVremeni / (1000 * 60 * 60 * 24));

    // Проверка на наличие свободных мест
    const obshchieLudi = vzroslye + deti;
    if (obshchieLudi > maxMesta) {
        document.getElementById('result').innerHTML = `
            <p style="color: red;">В отеле нет свободных мест для ${obshchieLudi} человек.</p>
        `;
        return;
    }

    // Расчет общей стоимости
    const stoimostVzroslye = vzroslye * cenaVzroslyy * kolichestvoDney;
    const stoimostDeti = deti * cenaRebenok * kolichestvoDney;
    const obshchayaStoimost = stoimostVzroslye + stoimostDeti;

    // Вывод результата
    document.getElementById('result').innerHTML = `
        <p>Количество дней: ${kolichestvoDney}</p>
        <p>Стоимость для взрослых: $${stoimostVzroslye}</p>
        <p>Стоимость для детей: $${stoimostDeti}</p>
        <p>Общая стоимость: <strong>$${obshchayaStoimost}</strong></p>
        <p style="color: green;">В отеле достаточно мест для ${obshchieLudi} человек.</p>
    `;
}
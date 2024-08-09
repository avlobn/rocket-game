// Генерация карты
function generateMap() {
    const mapSize = 100; // Размер карты 100x100
    map = [];

    for (let i = 0; i < mapSize; i++) {
        const row = [];
        for (let j = 0; j < mapSize; j++) {
            // Случайно выбираем значение для каждой ячейки
            const cellValue = Math.floor(Math.random() * 10); // Используем значения от 0 до 9
            row.push(cellValue);
        }
        map.push(row);
    }

    drawMap();
}
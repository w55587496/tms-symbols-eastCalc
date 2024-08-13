function Update(){
    const LEVEL_VANISH = document.getElementById('arc-vanish-level').value;
    const LEVEL_CHUCHU = document.getElementById('arc-chuchu-level').value;
    const LEVEL_LACHELN = document.getElementById('arc-lacheln-level').value;
    const LEVEL_ARCANA = document.getElementById('arc-arcana-level').value;
    const LEVEL_MORAS = document.getElementById('arc-moras-level').value;
    const LEVEL_ESFERA = document.getElementById('arc-esfera-level').value;

    const CURRENT_VANISH = document.getElementById('arc-vanish-current').value;
    const CURRENT_CHUCHU = document.getElementById('arc-chuchu-current').value;
    const CURRENT_LACHELN = document.getElementById('arc-lacheln-current').value;
    const CURRENT_ARCANA = document.getElementById('arc-arcana-current').value;
    const CURRENT_MORAS = document.getElementById('arc-moras-current').value;
    const CURRENT_ESFERA = document.getElementById('arc-esfera-current').value;

    const LEVEL_CERNIUM = document.getElementById('aut-cernium-level').value;
    const LEVEL_HOTEL = document.getElementById('aut-hotel-level').value;
    const LEVEL_ODIUM= document.getElementById('aut-odium-level').value;
    const LEVEL_SHANGRILA = document.getElementById('aut-shangrila-level').value;
    const LEVEL_ARTERIA = document.getElementById('aut-arteria-level').value;
    const LEVEL_CARCION = document.getElementById('aut-carcion-level').value;

    const CURRENT_CERNIUM = document.getElementById('aut-cernium-current').value;
    const CURRENT_HOTEL = document.getElementById('aut-hotel-current').value;
    const CURRENT_ODIUM = document.getElementById('aut-odium-current').value;
    const CURRENT_SHANGRILA = document.getElementById('aut-shangrila-current').value;
    const CURRENT_ARTERIA = document.getElementById('aut-arteria-current').value;
    const CURRENT_CARCION = document.getElementById('aut-carcion-current').value;

    //可升到滿等級, 剩餘ARC, 升到滿花費, 到20等ARC所需 
    const [VANISH_NEW_LVL, VANISH_NEW_COUNT, VANISH_COST, VANISH_NEED] = getArcResults('VANISH', LEVEL_VANISH, CURRENT_VANISH);
    const [CHUCHU_NEW_LVL, CHUCHU_NEW_COUNT, CHUCHU_COST, CHUCHU_NEED] = getArcResults('CHUCHU', LEVEL_CHUCHU, CURRENT_CHUCHU);
    const [LACHELN_NEW_LVL, LACHELN_NEW_COUNT, LACHELN_COST, LACHELNNEED] = getArcResults('LACHELN', LEVEL_LACHELN, CURRENT_LACHELN);
    const [ARCANA_NEW_LVL, ARCANA_NEW_COUNT, ARCANA_COST, ARCANA_NEED] = getArcResults('ARCANA', LEVEL_ARCANA, CURRENT_ARCANA);
    const [MORAS_NEW_LVL, MORAS_NEW_COUNT, MORASA_COST, MORAS_NEED] = getArcResults('MORAS', LEVEL_MORAS, CURRENT_MORAS);
    const [ESFERA_NEW_LVL, ESFERA_NEW_COUNT, ESFERA_COST, ESFERA_NEED] = getArcResults('ESFERA', LEVEL_ESFERA, CURRENT_ESFERA);
    
    //可升到滿等級, 剩餘AUT, 升到滿花費, 到11等AUT所需 
    const [CERNIUM_NEW_LVL, CERNIUM_NEW_COUNT, CERNIUM_COST, CERNIUM_NEED] = getAutResults('CERNIUM', LEVEL_CERNIUM, CURRENT_CERNIUM);
    const [HOTEL_NEW_LVL, HOTEL_NEW_COUNT, HOTEL_COST, HOTEL_NEED] = getAutResults('HOTEL', LEVEL_HOTEL, CURRENT_HOTEL);
    const [ODIUM_NEW_LVL, ODIUM_NEW_COUNT, ODIUM_COST, ODIUM_NEED] = getAutResults('ODIUM', LEVEL_ODIUM, CURRENT_ODIUM);
    const [SHANGRILA_NEW_LVL, SHANGRILA_NEW_COUNT, SHANGRILACOST, SHANGRILA_NEED] = getAutResults('SHANGRILA', LEVEL_SHANGRILA, CURRENT_SHANGRILA);
    const [ARTERIA_NEW_LVL, ARTERIA_NEW_COUNT, ARTERIA_COST, ARTERIA_NEED] = getAutResults('ARTERIA', LEVEL_ARTERIA, CURRENT_ARTERIA);
    const [CARCION_NEW_LVL, CARCION_NEW_COUNT, CARCION_COST, CARCION_NEED] = getAutResults('CARCION', LEVEL_CARCION, CURRENT_CARCION);

    const resultDetail = [
        ["消逝的旅途", VANISH_NEW_LVL, VANISH_NEW_COUNT, VANISH_COST, VANISH_NEED],
        ["啾啾愛爾蘭", CHUCHU_NEW_LVL, CHUCHU_NEW_COUNT, CHUCHU_COST, CHUCHU_NEED],
        ["拉契爾恩", LACHELN_NEW_LVL, LACHELN_NEW_COUNT, LACHELN_COST, LACHELNNEED],
        ["阿爾卡娜", ARCANA_NEW_LVL, ARCANA_NEW_COUNT, ARCANA_COST, ARCANA_NEED],
        ["魔菈斯", MORAS_NEW_LVL, MORAS_NEW_COUNT, MORASA_COST, MORAS_NEED],
        ["艾斯佩拉", ESFERA_NEW_LVL, ESFERA_NEW_COUNT, ESFERA_COST, ESFERA_NEED],
        ["賽爾尼溫", CERNIUM_NEW_LVL, CERNIUM_NEW_COUNT, CERNIUM_COST, CERNIUM_NEED],
        ["阿爾克斯", HOTEL_NEW_LVL, HOTEL_NEW_COUNT, HOTEL_COST, HOTEL_NEED],
        ["奧迪溫", ODIUM_NEW_LVL, ODIUM_NEW_COUNT, ODIUM_COST, ODIUM_NEED],
        ["桃源境", SHANGRILA_NEW_LVL, SHANGRILA_NEW_COUNT, SHANGRILACOST, SHANGRILA_NEED],
        ["阿爾特利亞", ARTERIA_NEW_LVL, ARTERIA_NEW_COUNT, ARTERIA_COST, ARTERIA_NEED],
        ["卡爾西溫", CARCION_NEW_LVL, CARCION_NEW_COUNT, CARCION_COST, CARCION_NEED],
    ]
    populateTable(resultDetail);
    var arc_level_total = [Number(VANISH_NEW_LVL), Number(CHUCHU_NEW_LVL), Number(LACHELN_NEW_LVL),
    Number(ARCANA_NEW_LVL), Number(MORAS_NEW_LVL), Number(ESFERA_NEW_LVL)].map(calARCforce).reduce((acc, curr) => acc + curr, 0); 

    var aut_level_total = [Number(CERNIUM_NEW_LVL), Number(HOTEL_NEW_LVL), Number(ODIUM_NEW_LVL), Number(SHANGRILA_NEW_LVL),
    Number(ARTERIA_NEW_LVL), Number(CARCION_NEW_LVL)].map(calAUTforce).reduce((acc, curr) => acc + curr, 0); 

    var arc_meso_cost_total = VANISH_COST + CHUCHU_COST + LACHELN_COST + 
    ARCANA_COST + MORASA_COST + ESFERA_COST 
    var aut_meso_cost_total =  CERNIUM_COST + HOTEL_COST + ODIUM_COST + SHANGRILACOST +
    ARTERIA_COST + CARCION_COST


    const total_cost = document.getElementById('total');
    total_cost.innerHTML =  `

        現有的ARC升到極限要 = ${arc_meso_cost_total.toLocaleString('en-US')}<br> 
        升級後的ARC等級 = +${arc_level_total} <br><br> 

        現有的AUT升到極限要 = ${aut_meso_cost_total.toLocaleString('en-US')}<br> 
        升級後的AUT等級 = +${aut_level_total} <br> 
    `
    document.getElementById('floatingWindow').style.display = 'block';
}


function populateTable(resultDetail) {
    console.log(resultDetail)
    const tableBody = document.getElementById('resultBody');
    tableBody.innerHTML = '';
    if (resultDetail != null){
        resultDetail.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell.toLocaleString('en-US');
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }
}


// 關閉懸浮窗
document.getElementById('closeButton').onclick = function() {
    document.getElementById('floatingWindow').style.display = 'none';
};

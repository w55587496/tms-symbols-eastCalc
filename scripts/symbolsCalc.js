function getArcResults(map, lvl, count){

    switch (map) {
        case 'VANISH':
            var meso_table = SYMBOLS_COST_TABLE_ARC_VANISH;
            break;

        case 'CHUCHU':
            var meso_table = SYMBOLS_COST_TABLE_ARC_CHUCHU;
            break;
        
        case 'LACHELN':
            var meso_table = SYMBOLS_COST_TABLE_ARC_LACHELN;
            break;

        case 'ARCANA':
            var meso_table = SYMBOLS_COST_TABLE_ARC_ARCANA;
            break;

        case 'MORAS':
            var meso_table = SYMBOLS_COST_TABLE_ARC_MORAS;
            break;
        
        case 'ESFERA':
            var meso_table = SYMBOLS_COST_TABLE_ARC_ESFERA;
            break;
    }

    if(lvl>0){
        var old_lvl = lvl;
        while(lvl <= SYMBOLS_EXP_TABLE_ARC.length && count >= SYMBOLS_EXP_TABLE_ARC[lvl-1]){
            count -= SYMBOLS_EXP_TABLE_ARC[lvl-1];
            lvl++;
        }
        var left_arc_count = SYMBOLS_EXP_TABLE_ARC.slice(lvl-1, SYMBOLS_EXP_TABLE_ARC.length).reduce((acc, val) => acc + val, 0);
        var left_arc_cost = meso_table.slice(old_lvl-1, lvl-1).reduce((acc, val) => acc + val, 0);
        var toFull = SYMBOLS_EXP_TABLE_ARC.slice(lvl-1, SYMBOLS_EXP_TABLE_ARC.length).reduce((acc, val) => acc + val, 0);
    }else{
        var left_arc_cost = 0;
        var left_arc_count = SYMBOLS_EXP_TABLE_ARC.slice(lvl-1, SYMBOLS_EXP_TABLE_ARC.length).reduce((acc, val) => acc + val, 0);
        var toFull =  SYMBOLS_EXP_TABLE_ARC.slice(0, SYMBOLS_EXP_TABLE_ARC.length).reduce((acc, val) => acc + val, 0);
    }
    var toFull = Math.max(left_arc_count - count, 0);
    return [lvl, count, left_arc_cost, toFull];
}

function getAutResults(map, lvl, count){

    switch (map) {
        case 'CERNIUM':
            var meso_table = SYMBOLS_COST_TABLE_AUT_CERNIUM;
            break;

        case 'HOTEL':
            var meso_table = SYMBOLS_COST_TABLE_AUT_HOTEL;
            break;
        
        case 'ODIUM':
            var meso_table = SYMBOLS_COST_TABLE_AUT_ODIUM;
            break;

        case 'SHANGRILA':
            var meso_table = SYMBOLS_COST_TABLE_AUT_SHANGRILA;
            break;

        case 'ARTERIA':
            var meso_table = SYMBOLS_COST_TABLE_AUT_ARTERIA;
            break;
        
        case 'CARCION':
            var meso_table = SYMBOLS_COST_TABLE_AUT_CARCION;
            break;
    }
    
    if(lvl>0){
        var old_lvl = lvl;
        while(lvl <= SYMBOLS_EXP_TABLE_AUT.length && count >= SYMBOLS_EXP_TABLE_AUT[lvl-1]){
            count -= SYMBOLS_EXP_TABLE_AUT[lvl-1];
            lvl++;
        }
        var left_aut_count = SYMBOLS_EXP_TABLE_AUT.slice(lvl-1, SYMBOLS_EXP_TABLE_AUT.length).reduce((acc, val) => acc + val, 0);
        var left_aut_cost = meso_table.slice(old_lvl-1, lvl-1).reduce((acc, val) => acc + val, 0);
        var toFull = SYMBOLS_EXP_TABLE_AUT.slice(lvl-1, SYMBOLS_EXP_TABLE_AUT.length).reduce((acc, val) => acc + val, 0);
    }else{
        var left_aut_cost = 0;
        var left_aut_count = SYMBOLS_EXP_TABLE_AUT.slice(lvl-1, SYMBOLS_EXP_TABLE_AUT.length).reduce((acc, val) => acc + val, 0);
        var toFull =  SYMBOLS_EXP_TABLE_AUT.slice(0, SYMBOLS_EXP_TABLE_AUT.length).reduce((acc, val) => acc + val, 0);
    }
    var toFull = Math.max(left_aut_count - count, 0);
    return [lvl, count, left_aut_cost, toFull];

}

function calARCforce(count){
    if(count>0){
        return SYMBOLS_ARC_FORCE[count-1]
    }else{
        return 0
    }
}


function calAUTforce(count){
    if(count>0){
        return SYMBOLS_AUT_FORCE[count-1]
    }else{
        return 0
    }
}

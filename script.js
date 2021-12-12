let arr = []
for (let i = 0; i < Infinity; i++) {
    let data = prompt('Введите команду');
    let units = data.split(' ');
    
    if (units[0] == 'add') {
        arr.push(units[1])
        console.log(arr);
    } else if (units[0] == 'del') {
        arr.splice(units[1], units[1])
        console.log(arr); 
    } else if (units == 'stop') {
        break; 
    }

    // let answer = arr.indexOf(units[1])
     // let answer = arr.indexOf(units[1])
    //  else if (units == 'del', '') {
    //     console.log(arr.splice(1,1));
    // } else if (units == 'stop') {
    //     break;
    // }

}
for(let i = 1; i <= 10; i++){
    //console.log(`Outer loop value ${i}`)
    for(let j = 1; j <= 3; j++){
        //console.log(`Inner loop value is ${j} and Outer loop value is ${i}`)
        console.log(i + '*' + j + ' = ' + i*j)
    }
}

// Static Array
const touristSpot = ['Delhi', 'Ayodhya', 'Puri', 'Agra', 'Goa', 'Jaipur', 'Shimla', 'Kerala', 'Mathura', 'Orisha', 'Kolkata', 'Asam']
// For Loop with break
loop1 : for(let i = 1; i <= 10; i++){
    //console.log(`Outer loop value ${i}`)
    loop2 : for(let j = 1; j <= 3; j++){
        //console.log(`Inner loop value is ${j} and Outer loop value is ${i}`)
        for(let k = 0; k < touristSpot.length; k++){
            //console.log(`3rd loop value is ${k}, 2nd loop value is ${j}, 1st loop value is ${i}`)
            //console.log(`Our tour spot is ${k+1}.${touristSpot[k]}`)
        }
        break loop2
    }
    break loop1
}
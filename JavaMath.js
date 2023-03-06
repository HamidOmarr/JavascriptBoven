var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];


function optellen(arrayEen, arrayTwee) {

    let string = " "
    arrayEen.forEach((waarde, i) => {
        string += (waarde + arrayTwee[i]) + " " ;
    })

    return string 
}

function aftrekken(arrayTwee, arrayEen) {
    
    let stringM = " "
    arrayEen.forEach((waarde, i) => {
        stringM += (arrayTwee[i] - waarde) + " " ;
    })

    return stringM
    
}

function vermenigvuldigen(arrayEen, arrayTwee) {

    let stringV = " "
    arrayEen.forEach((waarde, i) => {
        stringV += (waarde * arrayTwee[i]) + " " ;
    })

    return stringV
}

function delen(arrayTwee, arrayEen) {

    let stringD = " "
    arrayEen.forEach((waarde, i) => {
        stringD += (arrayTwee[i] / waarde) + " " ;
    })

    return stringD
}


document.getElementById("opteller").innerHTML = optellen(arrayEen, arrayTwee);
document.getElementById("aftrekket").innerHTML = aftrekken(arrayTwee, arrayEen);
document.getElementById("vuldiger").innerHTML = vermenigvuldigen(arrayEen, arrayTwee);
document.getElementById("deler").innerHTML = delen(arrayTwee, arrayEen);



const Saludar = (name, lastname, nickname) => {
    console.log(` Hola,
        Name: ${name},
        Lastname: ${lastname},
        Nickname: ${nickname}
    `);
}

Saludar('Franks', 'cz', 'coderuwur')

const firstElement = (arr) => {
    return arr[0];
}
console.log( firstElement([1,2,3]) )

const printArray = (arr) => {
    arr.forEach((elem,i) => {
        console.log(`Index: ${i}, Value:${elem}`);
    });
}
printArray([1,2,3])

const printObject = (obj) => {
    for (prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
    }
}
printObject({
    name: 'Franks',
    lastname: 'cz',
    nickname: 'coderuwur',
});


    const areaIsoscelesTriangle = (sides) => {
        if (sides.length == 3){
            sides.sort();
            let base, common, correctTriangle = true;
            if (sides[0] == sides[1])
                common = sides[0], base = sides[2];
            else if (sides[1] == sides[2])
                common = sides[1], base = sides[0];
            else 
                correctTriangle = false;
            if (correctTriangle) {
                let height = Math.sqrt(common ** 2 - (base/2.0) ** 2);
                return (base * height)/2.0;
            }
            else {
                console.log('Error: 2 equal sides are necessary!');
                return -1;
            }
        }
        else {
            console.log('Error: 3 sides needed!');
            return -1;
        }
    }

    console.log( areaIsoscelesTriangle([12,1,12]));
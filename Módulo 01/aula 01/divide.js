const inverse = ( x ) => x *- 1

const add = ( y ) => ( x ) => x + y
const substract = ( y ) => ( x ) => add( inverse( y ) )( x )

const divide = ( y ) => ( x ) => {
    let result = 0;

    const sub = substract( x )
    const cont = add(1)

    while ( y >= x ) {
        result = cont( result )
        y = sub( y )

    }
    return result;
}

console.log('15 / 3 =', divide(15)(3))

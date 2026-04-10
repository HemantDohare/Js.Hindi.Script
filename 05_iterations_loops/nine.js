///============= reduce========

// const array1 = [ 1,2,3,4,5];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accummulator, currentvalue) => accummulator + currentvalue, initialValue);

//     console.log(sumWithInitial);


const myNums = [1,2,3]


// const myTotal = myNums.reduce(function( acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//       return acc + currval
// } , 0)



const myTotal = myNums.reduce((acc , curr) => acc + curr, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "c++ course",
        price: 3999
    },
    {
        itemName: " data science course",
        price: 15999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);
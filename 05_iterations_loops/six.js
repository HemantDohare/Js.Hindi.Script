// const coding = ["js","ruby","java", "python","cpp"]

// const values =coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);


const myNum = [1,2,3,4,5,6,7,8,9,10]

//onst newNum = myNum.filter((num)=> num < 4  )

// const newNum = myNum.filter( (num) => {
//     return num > 4
// })


// const newNum =[]
// myNum.forEach( (num) => {
//     if ( num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);


///===========example========

const books = [
    {title: 'Book One', genre: 'Fiction', Publish: 1981,
        edition: 2004},
    {title: 'Book Two', genre: 'History', Publish: 1992,
        edition: 1999},
    {title: 'Book Three', genre: 'English', Publish: 1999,
        edition: 2025},
    {title: 'Book Four', genre: 'Science', Publish: 1989,
        edition: 2009},
    {title: 'Book Five', genre: 'Geography', Publish: 2009,
        edition: 2018},
    {title: 'Book Six', genre: 'History', Publish: 1987,
        edition: 2008},
    {title: 'Book Seven', genre: 'Python', Publish: 1999,
        edition: 2020},
    {title: 'Book Eight', genre: 'Fiction', Publish: 2002,
        edition: 2006},
    {title: 'Book Nine', genre: 'science', Publish: 1995,
        edition: 2015},
    {title: 'Book Ten', genre: 'History', Publish: 2000,
        edition: 2026},
]

let userBooks = books.filter((bk)=> bk.genre === 'History')
  userBooks = books.filter((bk)=> bk.Publish >= 2000 && bk.genre === "History")
console.log(userBooks);
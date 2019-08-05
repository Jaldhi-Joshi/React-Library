import React from 'react'
import Library from './Library'
import {render} from 'react-dom'



let bookList = [
    {"title": "a book", "author": "by author", "pages": 200},
    {"title": "a book", "author": "by author", "pages": 200},
    {"title": "a book", "author": "by author", "pages": 350},
    {"title": "a book", "author": "by author", "pages": 200}
]


render (
    <Library list = {bookList} />,
    document.getElementById('root')
)














// let Data = {
//     Apples:50,
//     Oranges:90,
//     Bananas: 30,
//     Total: 100
// }

// const getPercent = Decimal => {
//     return Decimal * 100 + '%'
// }

// const CalcGoalProgress = (Total, Apples) => {
//     return getPercent(Total/Apples)
// }

// const Sum = ({Apples,Oranges,Bananas,Total}) => {
//     return (
//         <section>
//             <div>
//                 Apples : {Apples}
//             </div>
//             <div>
//                 Oranges : {Oranges}
//             </div>
//             <div>
//                 Bananas : {Bananas}
//             </div>
//             <div>
//                 Total : {CalcGoalProgress(Total, Apples)}
//             </div>
//     </section>
//     )
// }

// render(
//     <Sum
//     Apples = {Data.Apples}
//     Oranges = {Data.Oranges}
//     Bananas = {Data.Bananas} 
//     Total = {Data.Total}
//     />,

//     document.getElementById('root')
// )
  
    
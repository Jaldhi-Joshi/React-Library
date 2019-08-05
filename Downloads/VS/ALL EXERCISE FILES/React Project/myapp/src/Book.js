import React  from 'react'

export const Book = ({title = "No title", author = "no author", pages = 0, freeBookmark}) => {
    return (
        <section>
            <div>
                <h1>Book: {title}</h1>
            </div>
            <div>
                <p> Author is : {author}</p>
            </div>
            <div>
                <p> Pages: {title} Pages </p>
             </div>
             <div>
                <p> Free Book Mark: { freeBookmark ? 'yes' : 'no'} </p>
             </div>
        </section>
    )
}
import React, {Component} from 'react'
import propTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

export class Library extends Component {

    static defaultProps = {
        list : [
            {"title" : "default", "author": "default", "pages": 0}
        ]
    };
     state = { 
         open : false,
         freeBookmark : true,
         hiring : true
         }
        toggleOpenClosed = () => {
            this.setState(prevState => ({
                open : !prevState.open
            }))
        }
    
        componentDidMount() {
            console.log("The component has mounted")
        }
        componentWillUpdate() {
            console.log("Compunent just updated")
        }
    
        render () {
            const {list} = this.props
            return (
                <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1> the Library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick = {this.toggleOpenClosed} > Change </button>
                {list.map(
                    (book , i) => <Book 
                                    key = {i}
                                    title = {book.title}
                                    author = {book.author}
                                    pages = {book.pages}
                                    freeBookmark = {this.state.freeBookmark}
                                    />
                )}
                </div>
            )
        }
    }
    
    Library.propTypes = {
        list: propTypes.array
    }
    
    Book.propTypes = {
        title : propTypes.string,
        author: propTypes.string,
        pages: propTypes.number,
        freeBookmark: propTypes.bool
    }
    export default Library
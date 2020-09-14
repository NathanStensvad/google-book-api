import React, { Component } from 'react';
import './BookList.css';
import BookItem from '../BookItem/BookItem'

class BookList extends Component {
  render() {
    console.log(this.props.bookArray)
     const list = this.props.bookArray.map((book, key) => <BookItem {...book} key={key}/>)
    return(
      
      <div>
        {list}
      </div>
    )
  }
}

export default BookList;
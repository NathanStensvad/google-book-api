import React, { Component } from 'react';
import './BookItem.css';

class BookItem extends Component {

  render() {
    return (
      <div id="book-item">
        <h2>{this.props.volumeInfo.title}</h2>
        <br />
        <div className="group">
          <img  src={this.props.volumeInfo.imageLinks.thumbnail} alt={this.props.volumeInfo.title}/>
          <div>
            <p>Author: {(this.props.volumeInfo.hasOwnProperty('authors')) && this.props.volumeInfo.authors[0] }</p>
            <p>Price: ${((this.props.saleInfo.saleability === "FOR_SALE") || this.props.saleInfo.saleability === "FOR_SALE_AND_RENTAL") && this.props.saleInfo.listPrice.amount}</p>
            <br/>
            <p>{this.props.volumeInfo.subtitle}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BookItem;
import React, { Component } from 'react';
import './Search.css';

class Search extends Component {


  formSubmitted = (e) => {
    e.preventDefault()
    this.props.handleSubmit(e.currentTarget.bookName.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitted}>
          Search: <input type="text" name="bookName"/>
          <input type="submit" value="Submit"/><br/>
        
          Print Type:
        <select onChange={e => this.props.handlePrint(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
          Book Type:
        <select onChange={e => this.props.handleBook(e.target.value)}>
          <option value="">No Filter</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="ebooks">Ebooks</option>
        </select>
        </form>

      </div>
    )
  }
}

export default Search;
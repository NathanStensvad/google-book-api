import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search'
import BookList from './BookList/BookList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      printType: "all",
      searchTerm: "",
      bookArray: []
    };
  }

  submitSearch(bookName) {
    var searchURL = "https://www.googleapis.com/books/v1/volumes?q="
    var url = searchURL + bookName + "&printType=" + this.state.printType;

    if(this.state.filter !== "") {
      url = url + "&filter=" + this.state.filter
    }

    url = url + "&key=AIzaSyBVto86K2Vhzso5niLda42gM73M-krWd1s"

    console.log(bookName);
    console.log(url);

    fetch(url)
      .then(result => {
        if(!result.ok) {
          throw new Error("Something went wrong")
        }
        return result
      })
      .then(result => result.json())
      .then(data => {
        this.setState ({
          ...this,
          bookArray: data.items
        })
      })
      .catch(err => {
        console.log("error ocurred")
      })
  }

  printTypeChanged(props) {
    this.setState({
      ...this,
      printType: props
    })
  }

  bookTypeChanged(props) {
    this.setState({
      ...this,
      filter: props
    })
  }
  
  render() {
    if(this.state.bookArray[0] !== undefined) {
      console.log(this.state.bookArray[0].volumeInfo.printType)
    }
    return(
      <>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Search
      handleSubmit={submit => this.submitSearch(submit)}
      handlePrint={print => this.printTypeChanged(print)}
      handleBook={book => this.bookTypeChanged(book)}/>
      {(this.state.bookArray.length > 0) && <BookList
      bookArray={this.state.bookArray}/>}
      </>
    )
  }
}

export default App;

//https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyBVto86K2Vhzso5niLda42gM73M-krWd1s
import React, { Component } from 'react'
import ProStars from './Components/ProStars'
import data from './resources/prostars.json'
import './App.css'

export default class App extends Component {
  constructor()
  {
    super()
      this.state = { items:[...data].slice(0,5)}
  }

  getRandom=()=>{
    let newarr=[]
    while(newarr.length<5){
      let randomData = data[Math.floor(Math.random()*52)+1]
      if(newarr.indexOf(randomData)===-1)
        newarr.push(randomData)
    }
    this.setState({
      items : [...newarr]
    })
    console.log(newarr);
  }
  sortByName = () =>{
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    let sortedArr = this.state.items
    sortedArr.sort(compare)
    console.log(sortedArr);
    this.setState({
      items: [...sortedArr]
    })

    }
  sortByPopularity = () => {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.popularity
      const nameB = b.popularity

      let comparison = 0;
      if (nameA < nameB) {
        comparison = 1;
      } else if (nameA > nameB) {
        comparison = -1;
      }
      return comparison;
    }
    let sortedArr = this.state.items
    sortedArr.sort(compare)
    console.log(sortedArr);
    this.setState({
      items : [...sortedArr]
    })
  }

  deleteStar = (id) => {
    console.log(id);
    let newArr = this.state.items
    newArr.map(item=>{
      if(item.id === id)
      {
        let index = this.state.items.indexOf(item)
        if(index>-1)
        {
          newArr.splice(index,1)
          console.log(newArr);
          this.setState({
            items : [...newArr]
          })
        }
      }
    })
  }
    
  render() {
    return (
      <>
      <h1>ProStars</h1>
      <div className="main-container">
        <span>
          <button onClick={this.getRandom}>Random</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        </span>
        <ProStars {...this.state} deleteStar={this.deleteStar}/>
      </div>
      </>
    )
  }
}


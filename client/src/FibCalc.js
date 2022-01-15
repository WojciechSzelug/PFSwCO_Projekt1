import React, { Component } from 'react';
import axios from 'axios';

class FibCalc extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    show: false,
  };

constructor(props){
super(props);
this.showHistory=this.showHistory.bind(this);
}

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });    
    
   
    this.setState({ seenIndexes: this.state.seenIndexes.concat(this.state.index)});
    this.setState({ index: '' });
    this.fetchIndexes();
    this.fetchValues();

  };

  renderSeenIndexes() {
  	
    return this.state.seenIndexes.reverse().slice(0,10).reverse().map(({ number }) => number).join(', ');
    	
  }

  renderValues() {
    const entries = [];
if(this.state.show){
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          Indeks: {key} | Element: {this.state.values[key]}
        </div>
      );}
      } else {
    return null;}
    
    

    return entries;
  }
  
  showHistory(){
  this.setState({
  	show: !this.state.show
  });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Wpisz indeks:</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Oblicz</button>
          <button onClick={this.showHistory}>
        	Historia
        </button>
        </form>

        <h3>Wyrenderuj ostatnie indexy (limit 10):</h3>
        {this.renderSeenIndexes()}
        
        <h3>Element ciagu Fibbonacciego:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default FibCalc;

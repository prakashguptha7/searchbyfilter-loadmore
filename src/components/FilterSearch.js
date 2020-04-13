import React, { Component } from 'react'
import data from '../data';
import '../style.css';
export class FilterSearch extends Component {
    constructor(props) {
        super(props)
        this.data = 
        this.state = {
            count: 10,
            defaultCount: 10,
            search: ''
        }
    }

    onchange = e =>{
        this.setState({
            search : e.target.value
        })
        console.log(e.target.value);
    }


    handleCount() {
        let count = this.state.defaultCount;
        count =  this.state.count + 50;
        this.setState({ count });
      }
  

    render() {
        const count = this.state.count;
        const showData = (item, index) => {
            const {search} = this.state;

            if(search !=="" && item.name.toLowerCase().indexOf(search) === -1){
                return null
            }
         return ((index < count) ?<ul>  <li>
                   <span>{index+1}</span>
                   <img src={item.image} alt="img" />   
                   <span>{item.name}</span>
                   <span className="phone">{item.phoneNumber}</span>
                 </li>    </ul>: '');
        };
        return (
            
            <div className="holder">
            <div>
            <h2>Search By Filter And Loader React App</h2>
            </div>
            <div>
                <input type="text" className="search" onChange={this.onchange} placeholder="Search By Name"/>
           </div>

            <div>
            {data.map(showData)}
            <button class="button button2" href="#" onClick={this.handleCount.bind(this)}>Load</button>
          </div>
            </div>
        )
    }
}

export default FilterSearch


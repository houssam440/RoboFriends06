import React,{Component} from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll'
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends Component{
	constructor(){
super()
 this.state={

	robots: [],
	Searchfield:''

 }
 
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>{
     return  response.json();
	})
	.then(users=>{
		this.setState({robots:users})
	})
	}
onSearchChange=(event)=>{
	this.setState({Searchfield:event.target.value})	
}
	render(){
const filterRobots=this.state.robots.filter(robots=>{
    return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
})
	return( 
		<div className="tc">
		<h1 className='f2'>Robots Friends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
	<CardList  robots={filterRobots} />
	 </ErrorBoundry>
	  </Scroll>
	</div>
	);
}
}
export default App;
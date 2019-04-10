import React from 'react';

class Section1 extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		let left = this.refs.left , right = this.refs.right,
			{innerWidth,innerHeight} = window;
		console.log(innerWidth,innerHeight);
	}
	render(){
		return <div>
			<canvas ref = 'left'></canvas>
			<canvas ref = 'right'></canvas>
		</div>
	}
}

export default Section1;
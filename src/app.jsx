import React from 'react';
import ReactDOM from 'react-dom';
import Section1 from './component/section1.jsx';
import './style.less';
import img from "./img/bg.jpg";

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			imgInfo:{
				w:0,
				h:0
			}
		}
	}
	componentDidMount(){
		var bgimg = new Image();
		bgimg.src = img;
		this.setState({
			imgInfo:{
				w: bgimg.naturalWidth,
				h: bgimg.naturalHeight
			}
		});
		this.resizeListener()
	}
	resizeListener(){
		let winfo = {
			w: window.innerWidth,
			h: window.innerHeight
		};

		let bgimg = this.refs.bgimg;

		if(winfo.w/winfo.h >= this.state.imgInfo.w/this.state.imgInfo.h){
			bgimg.style={backgroundSize: 'auto 100%'}
		}else{
			bgimg.style={backgroundSize: '100% auto'}
		}
	}
	render(){
		return <div className="homepage">
			<div className="bgbox" ref='bgbox'>
				<div className="bgimg" ref="bgimg">
					<div className="bgshadow"></div>
				</div>
			</div>
		</div>
	}
}

ReactDOM.render(<App/>,document.getElementById('app'));
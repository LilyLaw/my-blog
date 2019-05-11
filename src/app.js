import React from 'react';
import ReactDOM from 'react-dom';
import Section1 from './component/section1.jsx';
import Stylecss from './style.less';
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
					<div className="bgshadow">
						<div className="conbox">
							<h1>路立琳的个人网站</h1>
							<ul>
								<li>
									<a target='_blank' href="https://github.com/LilyLaw">我的git</a>
								</li>
								<li>
									<a target='_blank' href="https://www.jianshu.com/u/cc5b1117197a">我的简书</a>
								</li>
								<li>
									<a target='_blank' href="#">我的线上项目</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

ReactDOM.render(<App/>,document.getElementById('app'));
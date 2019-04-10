import React from 'react';
import ReactDOM from 'react-dom';
import Section1 from './component/section1.jsx';
import './style.less';

class App extends React.Component {
	render(){
		return <div className="homepage">
			<Section1></Section1>
		</div>
	}
}

ReactDOM.render(<App/>,document.getElementById('app'));
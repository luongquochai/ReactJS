var React = require('react');
var ReactDOM = require('react-dom');

var Note = React.createClass({
  render(){
    return(
      <div>
      <p>{this.props.children}</p>
      <button>Delete</button>
      </div>
    );
  }
})

var List = React.createClass({
  getInitialState(){
    return {mang: ["Android","iOS","NodeJS"]}
  },
  render(){
    return (
      <div>
        {this.state.mang.map(function(e,i){
          <Note key={i}>{e}</Note>
        })}
        </div>
    );
  }
});
ReactDOM.render(
  <h1>I am ReactJS </h1>,
  document.getElementById('root')
)

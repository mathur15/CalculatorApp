import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*Steps to create
1. Create a component to display entire calculator(result+keys)
2. Create another component just for result
3. Pass in the state of calculator to result for it display
*/

function Square(){
          return(
               <button className="calcButtons">
               BUTTON!!
              </button>
          );
}

// class result extends React.Component{

// }

class calculator extends React.Component{
     renderSquare(i){
          return(
               <Square/>
          )
     }

     render(){
          return(
           <div>
               <div className="boardRow">
                   {this.renderSquare(1)}
                   {this.renderSquare(1)}
                   {this.renderSquare(1)}
                   {this.renderSquare(1)}
               </div>
               <div className="boardRow">
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
               </div>
               <div className="boardRow">
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
               </div>
          </div>
          )
     }

}


class calc extends React.Component{
     render(){
          return(
               <div className="outer">
                    <div className="calculator">
                         <calculator/>
                    </div>
                    <div className="info">
                         <div></div>
                    </div>
               </div>
          );
     }
}

ReactDOM.render(
     <calc />,
     document.getElementById('root')
);

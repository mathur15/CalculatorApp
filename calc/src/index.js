import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*Steps to create
1. Create a component to display entire calculator(result+keys)
2. Create another component just for result
3. Pass in the state of calculator to result for it display
*/
class Result extends React.Component{
     render(){
          return(
          <div className="result">
            <div className="answer">
              {this.props.value}
             </div>     
          </div>
          )
     }
}

class Clear extends React.Component{
     constructor(props){
      super(props);
     }
     render(){
          return(
               <div className="secondRow">
                    <div className="clearButton">
                        clear  
                    </div>  
               </div>
          )
     }
}

class Calculator extends React.Component{
  constructor(){
    this.state={
      a:0,
      b:0,
      isOperator:False,
      operator:null
      count:0,
    }

  }

  operands(i){
     if(this.state.count==0 && this.state.isOperator==False){
      this.state={
        a:Number(i),
        b:0,
        isOperator: True
        count:1,
        operator:null
      }
     if(this.state.isOperator){
       this.state={
        a:Number(i),
        b:0,
        isOperator: False,
        count:2,
        operator:i,
       }
     } 
     if(count==2){

     }

  }
  render(){
      return(
        <div>
          <div className="firstSecond">
            <Result/>
            <Clear/>
          </div>
          <div className="numberOps">
          <table>
               <tr>
                  <td className="buttons">  
                    <button onClick={()=> this.operands("7")}>
                         7
                    </button>
                  </td>
                  <td className="vertical buttons" onClick={()=> this.operands("8")}>
                    <button>
                         8
                    </button>
                  </td>
                  <td className="vertical buttons" onClick={()=> this.operands("9")}>  
                    <button>
                         9
                    </button>
                  </td> 
                  <td className="signs">
                    <button className="operations" onClick={()=> this.operands("=")}>
                      -
                    </button>
                  </td>  
                </tr>
                 <tr>
                 <td className="horizontal buttons" onClick={()=> this.operands("4")}>  
                    <button>
                         4
                    </button>
                  </td>
                  <td className="vertical horizontal buttons" onClick={()=> this.operands("5")}>              
                    <button>
                         5
                    </button>
                  </td>
                  <td className="horizontal buttons" onClick={()=> this.operands("6")}>  
                    <button>
                         6
                    </button>
                   </td>
                   <td className="horizontal signs">
                    <button className="operations" onClick={()=> this.operands("+")}>
                      +
                    </button>
                  </td> 
                 </tr>
                 <tr>
                   <td className="buttons">
                     <button onClick={()=> this.operands("1")}>
                         1
                    </button>
                   </td>
                   <td className="vertical buttons" onClick={()=> this.operands("2")}> 
                    <button>
                         2
                    </button>
                   </td>
                   <td className="buttons" onClick={()=> this.operands("3")}> 
                    <button>
                         3
                    </button>
                   </td> 
                   <td className="signs">
                    <button className="operations" onClick={() => this.sendResult("=")}>
                      =
                    </button>
                  </td> 
                 </tr>
          </table>
        </div>
      </div>
          );
     }

}

class Calc extends React.Component{
  render(){
    return(
      <div className="outer">
        <div className="calculator">
          <Calculator/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calc />,
  document.getElementById('root')
);

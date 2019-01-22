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
              999 
             </div>     
          </div>
          )
     }
}

class Clear extends React.Component{
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
                    <button>
                         7
                    </button>
                  </td>
                  <td className="vertical buttons">
                    <button>
                         8
                    </button>
                  </td>
                  <td className="vertical buttons">  
                    <button>
                         9
                    </button>
                  </td> 
                  <td className="signs">
                    <button className="operations">
                      -
                    </button>
                  </td>  
                </tr>
                 <tr>
                 <td className="horizontal buttons">  
                    <button>
                         4
                    </button>
                  </td>
                  <td className="vertical horizontal buttons">              
                    <button>
                         5
                    </button>
                  </td>
                  <td className="horizontal buttons">  
                    <button>
                         6
                    </button>
                   </td>
                   <td className="horizontal signs">
                    <button className="operations">
                      +
                    </button>
                  </td> 
                 </tr>
                 <tr>
                   <td className="buttons">
                     <button>
                         1
                    </button>
                   </td>
                   <td className="vertical buttons"> 
                    <button>
                         2
                    </button>
                   </td>
                   <td className="buttons"> 
                    <button>
                         3
                    </button>
                   </td> 
                   <td className="signs">
                    <button className="operations">
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

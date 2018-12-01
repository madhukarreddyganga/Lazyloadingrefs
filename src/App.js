import React, { Component,lazy,Suspense/*lazy loading*/  } from 'react';
import './App.css';
//import Comp from './mycomp/comp';



const Comp=lazy(()=>import('./mycomp/comp'));//lazyloading
const MyInput1=(props)=>{
return (<input type="text" ref={props.inputRef}/>)
}
const FunctionalComp=()=>{
  const onClick=()=>{
      inputRef.focus();
  }
  let inputRef=null;
  return (<div>
     <div>
       <span>MyInput</span>
       
       <MyInput1 inputRef={(input)=>{inputRef=input}} value="MyInput1"/>
      <input type="button" value="submit"onClick={onClick} />
       
       </div>
  </div>)
}
class App extends Component {
  onClick=()=>{
    alert(`Thanks: ${this.firstname.value}| ${this.lastname.value} submitted!`);
  }
  onKeyUp=(target,e)=>{
    if(e.keyCode===13){
       switch(target){
         case 'firstname':
         this.lastname.focus();
          break;
          case 'lastname':
         this.age.focus();
          break;
          case 'age':
         this.submit.focus();
         break;
          default:
          this.firstname.focus();
           break;
       }
    }
  }
  render() {
    return (
      <div className="App">
      <FunctionalComp></FunctionalComp>
      <div>
       <span>FirstName:</span>
       <input type="text" placeholder="FirstName"
       ref={(input)=>{this.firstname=input}} 
       onKeyUp={this.onKeyUp.bind(this,'firstname')}/><br/>
       </div>
       <div>
       <span>LastName:</span>
       <input type="text" placeholder="LastName" ref={(input)=>{this.lastname=input}} onKeyUp={this.onKeyUp.bind(this,'lastname')}/><br/>
       </div>
       <div>
       <span>Age:</span>
       <input type="text" placeholder="Age" ref={(input)=>{this.age=input}} onKeyUp={this.onKeyUp.bind(this,'age')}/><br/>
       <input type="button"  value="submit" onClick={this.onClick} ref={(input)=>{this.submit=input}}
       onKeyUp={this.onKeyUp.bind(this,'submit')} /><br/>
       </div>
       <div>My name is madhu.....</div>
       <Suspense fallback={<div>Lazy Loading concept......</div>}>
       <Comp></Comp>
       </Suspense>
      </div>
    );
  }
}

export default App;

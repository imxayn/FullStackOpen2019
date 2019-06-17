import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
    return(
        <div>
            <p>Hello {props.name} , your are {props.age} years old!</p>
        </div>
    )
}

const App = () => {
    const name = 'Abc'
    const age= 22

    return(
        <>
            <h1>Greetings</h1>
            <Hello name={name} age={age}/>
            <Hello name='Xyz' age={10+8}/>
            
        </>
    )
}
  
  


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

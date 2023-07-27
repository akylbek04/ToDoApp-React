import React from "react";
import { Lists } from "../Lists/Lists";


class List extends React.Component{
    constructor(){
        super();
        this.state ={
            thingsToDo: [],
            inputValue: ''
        }
    }

    deleteMe = (i) => {
        const prevState = [...this.state.thingsToDo];
        const filtered = prevState.filter((_, index) => index !== i);
        this.setState({thingsToDo: filtered});
    }

    add = () => {
        const newState = [...this.state.thingsToDo, this.state.inputValue];
        this.setState({thingsToDo: newState});
        this.setState({inputValue: ''})
    }

    render(){
        const { thingsToDo, inputValue } = this.state;
        const { deleteMe, add } = this;
        return(
            <>
                <h1>To Do App</h1>
                
                    <input  
                        value={inputValue}
                        onChange={e => {
                            this.setState({inputValue: e.target.value})
                        }}

                    />
                    <button onClick={() => add()}>ADD</button>
                
                <ol>
                    {thingsToDo.map((el, index) => {
                        return(
                            <Lists key={index} name={el} handleDelete={deleteMe} index={index}/>
                        )
                    })}
                </ol>
            </>
        )
    }
}

export default List
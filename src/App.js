import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Axios from "axios";
import { tsExpressionWithTypeArguments } from "@babel/types";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],loading:false
        };
    }
    componentDidMount() {
        this.setState({
            loading:true
        })
        console.log("component has loaded");
        Axios
        .get("http://localhost:3000/posts").then(response => {
            setTimeout( this.setState({
                items:response.data,
                loading:false
            }),50000)
           
        })
        .catch(error =>{
            console.log("error",error);
        });
    }

    addTodo = (a, element) => {
        const id = this.state.items.length +1;
        const todo = {id:id,title:a}
        Axios
        .post("http://localhost:3000/posts",todo)
        .then(this.componentDidMount())
        .catch(error=>{
            console.log("error",error)
        })
        element.value = ""
    }
    
    delete = (a) => {
        if (window.confirm("r u sure?"))
        {
            Axios
            .delete(`http://localhost:3000/posts/${a}`)
            .then(
                this.setState({
                    items: this.state.items.filter(i => i.id !==a),

                })
            )
            .catch(error=>{
                console.log("error",error)
            })
        }
    }
    render() {
        let loading="";
        if (this.state.loading){
         return (loading = <p>loading..please wait</p>) 
        }
        
        return (
            <div>
                <TodoForm addTodo={this.addTodo} />
                <TodoList addlist={this.state.items} delete={this.delete}/>
            </div>
        );
    }
}
export default App;
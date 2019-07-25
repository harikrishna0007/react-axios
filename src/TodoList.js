import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items:[]

        }
    }

    render() {
        console.log(this.props.addlist)
        return (
            <div>
            <ul className="list-group">
                {
                    this.props.addlist.map((item) => {
                        return( <li key={item} className="list-group-item">{item.item}{item.id}{item.title}
                            <button  className="btn btn-danger float-right"  onClick={this.props.delete.bind(this, item.id)}>delete</button>
                            <button className="btn btn-success float-right">mark completed</button>
                        </li>
                        )
                    })
                }
            </ul>
            </div>
        );
    };
}
export default TodoList;
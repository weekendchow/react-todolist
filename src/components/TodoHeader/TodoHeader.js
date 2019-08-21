import React from 'react';
import './TodoHeader.css'

export class TodoHeader extends React.Component {
    state = {
        labelInput : ''
    }
  
    render(){
        const { filter, addTodo, setFilter } = this.props;
        const { labelInput } = this.state;


        const _onChange = e =>{
            this.setState(
                { labelInput: e.target.value }
            );
        }

        const _onAdd = () => {
            addTodo(labelInput)
            this.setState(
                { labelInput: ''}
            )
        }

        const _onFilter = e => {
            setFilter(e.target.innerText)
        }

        return(
            <header>
                <span className='title'>todos</span>
                <div className="addTodo">
                    <input value={labelInput} onChange={_onChange} className="textfield" placeholder="What needs to be done?"/>
                    <button className="submitAdd" onClick={_onAdd}>Add</button>
                </div>
                <nav className="filter">
                    <button className={filter === 'all' ? 'selected' : ''} onClick={_onFilter}>all</button>
                    <button className={filter === 'active' ? 'selected' : ''} onClick={_onFilter}>active</button>
                    <button className={filter === 'completed' ? 'selected' : ''} onClick={_onFilter}>completed</button>
                </nav>
            </header>
        )
    }
}
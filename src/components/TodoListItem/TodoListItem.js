import React from 'react';
import './TodoListItem.css';
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export class TodoListItem extends React.Component {
    state = {
        labelEdit: ''
    }
    componentDidMount(){
        this.setState({
            labelEdit: this.props.label
        })
    }

    render(){
        const {labelEdit} = this.state
        const {label, completed, complete, editTodo, deleteTodo, id } = this.props;

        const _onEdit = e => {
            const edit = document.querySelector('.edit')
            const label = document.querySelector('.label')
            const icon = document.querySelector('.icon')

            if (edit.style.display === "none") {
                label.style.display = 'none';
                icon.style.display = 'none';
                edit.style.display = "inline-block";
            }
        
        }

        const _onChange = e => {
            this.setState({
                labelEdit: e.target.value
            })
        }

        const _onSave = e => {
            const edit = document.querySelector('.edit')
            const label = document.querySelector('.label')
            const icon = document.querySelector('.icon')

            if (edit.style.display === "inline-block") {
                label.style.display = "inline-block";
                icon.style.display= "inline-block"
                edit.style.display = "none";
            } 

            editTodo(id, labelEdit, completed)
        }
    
        return(
            <li className="todo">
                <label className='label' style={{display: 'inline-block'}}>
                    { label }        
                    <input className='checkfield' type='checkbox' checked={ completed } onChange={() => complete(id)}/>                    
                    <span className='checkmark' > </span>
                </label>
                <div className='edit' style={{display: 'none'}}>
                    <input className="editfield" value={labelEdit} onChange={_onChange} />
                    <button className='submitSave' onClick={_onSave}>Save</button>
                </div>
                <span className='icon' style={{display: 'inline-block'}}>
                    <FaRegEdit className='iconedit' onClick={_onEdit} />
                    <IoMdClose className='icondelete' onClick={()=>deleteTodo(id)} />
                </span>
         </li>
        )
    }
    
}
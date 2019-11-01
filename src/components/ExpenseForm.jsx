import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


export class ExpenseForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: props.expense ? props.expense.title : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'amount') {
            if (value.match(/^\d*(\.\d{0,2})?$/)) {
                this.setState(() => (
                    {
                        [name]: value
                    }
                ))
            }
        } else {
            this.setState(() => (
                {
                    [name]: value
                }
            ))
        }
    }

    onDateChange = (createdAt) => {
        createdAt && this.setState(() => (
            {
                createdAt
            }
        ))

    }

    onFocusChange = ({ focused }) => {
        this.setState(() => (
            {
                focused
            }
        ))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.amount) {
            this.setState(() => ({ error: 'The form in invalid please fill all the requirement field' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} 
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        autoFocus
                        value={this.state.title}
                        onChange={this.handleChange}
                        name='title' />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        name='amount' />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} />
                    <textarea
                        name="note"
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.handleChange}>
                    </textarea>
                    <button>Add Exchange</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm

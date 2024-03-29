import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

class ExpensesListFilters extends Component {
    state = {
        focused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (focused) => {
        this.setState(() => ({ focused }))
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }
                    }>
                    <option value="">--Sort by--</option>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                     startDateId='start'
                     endDateId='end'
                     startDate={this.props.filters.startDate}
                     endDate={this.props.filters.endDate}
                     onDatesChange={this.onDatesChange}
                     focusedInput={this.state.focused}
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}
                     showClearDates={true}
                     isOutsideRange={() => false}
                     />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesListFilters)





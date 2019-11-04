import React from 'react'
import { Link } from "react-router-dom"
import moment  from 'moment'
import numeral from 'numeral'

const ExpensesListItem = ({title, note, createdAt, amount, id, dispatch}) => (
    <>
        <Link exact="true" to={`/edit/${id}`}><h3>Title: {title}</h3></Link>
        <p>
        Note: {note}
        Amount: {numeral(amount / 100).format('$0,0.00')}
        Created at: {moment(createdAt).format('MMM Do, YYYY')}</p>

    </>
)

export default ExpensesListItem

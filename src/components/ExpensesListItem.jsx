import React from 'react'
import { Link } from "react-router-dom"

const ExpensesListItem = ({title, note, createdAt, amount, id, dispatch}) => (
    <>
        <Link exact="true" to={`/edit/${id}`}><h3>Title: {title}</h3></Link>
        <p>Note: {note}</p>
        <p>Amount: {amount}</p>
        <p>Created at: {createdAt}</p>

    </>
)

export default ExpensesListItem

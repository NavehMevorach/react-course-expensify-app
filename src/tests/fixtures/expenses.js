import moment from 'moment'

export default [
    {
        id: 1,
        title: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: 2,
        title: 'Rent',
        note: '',
        amount: 1000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        title: 'Credit Card',
        note: '',
        amount: 550,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

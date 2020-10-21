import moment from 'moment'

export default [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'rent',
    note: '',
    amount: 10500,
    createdAt: moment(0).subtract(4,'days').valueOf() 
},{
    id: '3',
    description: 'water',
    note: '',
    amount: 1400,
    createdAt: moment(0).add(4,'days').valueOf()   
}]


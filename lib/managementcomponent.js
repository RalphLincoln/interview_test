const axios = require("axios");

exports.postprofile = (firstName, lastName, age, country, state) => {
    axios.post('https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/profile', 
    { firstName, lastName, age, country, state })
        .then(result => {
            console.log(result.data)
        })
        .catch(error => {
            console.log(error.message)
        })
}
exports.postbank = (bankName, accountNumber, accountName) => {
    axios.post('https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/bank', 
    { bankName, accountName, accountNumber })
        .then(result => {
            console.log(result.data)
        })
        .catch(error => {
            console.log(error.message)
        })
}
exports.getdebitmandate = () => {
    return axios.get('https://6297078214e756fe3b273ab8.mockapi.io/bnpl/api/debitmandate')
        .then(result => {
            return result
        })
        .catch(error => {
            return error.message
        })
}


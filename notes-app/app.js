const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note!')
} else {
    console.log('Removing note!')
}
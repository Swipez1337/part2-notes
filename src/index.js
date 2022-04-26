import ReactDOM from 'react-dom/client'
import App from './App'

//Mock data for testing purposes
const users = [
    {
        id: 1,
        personName: 'Linus Torvalds',
        personNumber: '1337',
        date: '2022-03-25T21:21:45.098Z'
    },
    {
        id: 2,
        personName: 'Elon Musk',
        personNumber: '1338',
        date: '2022-04-01T17:29:30.091Z'
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App names={users}/>
)

import ReactDOM from 'react-dom/client'
import App from './App'

const names = [
  {
    id: 1,
    content: 'Linus Torvalds',
    date: '2022-03-25T17:30:31.098Z'
  },
  {
    id: 2,
    content: 'Elon Musk',
    date: '2022-04-01T18:39:34.091Z'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App names={names} />
)

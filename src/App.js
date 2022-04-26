import {useState} from 'react'
import User from './components/User'
import Filter from './components/Filter'
import NewEntryName from "./components/NewEntryName";
import NewEntryNumber from "./components/NewEntryNumber";

const App = (props) => {

    const [users, setUsers] = useState(props.names)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [showFilter, setFilterAll] = useState('')


    /**
     * Function to add entry to the phonebook
     * @param event
     */
    const addEntry = (event) => {
        event.preventDefault()
        const nameObject = {
            personName: newName,
            personNumber: newNumber,
            date: new Date().toISOString(),
            id: users.length + 1,
        }

        console.log("New name is: " + newName)
        console.log("New number is: " + newNumber)

        //Check if the name already has been inserted, then alert message with template string
        const nameAlreadyExists = users.some(e => {
            if (e.personName === nameObject.personName) {
                const templateStringAlertMsg = `${nameObject.personName} has already been added to your phonebook`
                alert(templateStringAlertMsg)
                console.log(nameObject.personName)
                return true
            } else {
                return false
            }
        })

        if (!nameAlreadyExists) { //if entry does not already exist add entry
            setUsers(users.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }

    }

    /**
     * Handler for user name change event
     * @param event
     */
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    /**
     * Handler for user phone number change event
     * @param event
     */
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    /**
     * Handler for the altering of the filter function. This is done by creating a regular expression and checking the name entries towards this.
     * Inspiration for regex part: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
     * @param event
     */
    const handleFilterChange = (event) => {
        const filterVal = event.target.value
        const re = new RegExp(filterVal);
        const filter = () => users.filter(user => user.personName.match(re))
        //console.log(names)

        setFilterAll(filterVal) //update input filter
        setUsers(filter) //set the filter on the user entries

        console.log("The filter value is: " + filterVal)

        if (filterVal === "") { //filter empty
            console.log("Filter value is empty")
            setShowAll(showAll.filter(user => user.personName !== null)) //reset back to showing all users
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter value={showFilter}
                    onChange={handleFilterChange}/>

            <h2>Add new entry</h2>

            <form onSubmit={addEntry}>

                <NewEntryName value={newName}
                              onChange={handleNameChange}/>

                <NewEntryNumber value={newNumber}
                                onChange={handleNumberChange}/>

            </form>

            <h2>Numbers</h2>
            <ul>
                {users.map(user =>
                    <User key={user.id} user={user}/>
                )}
            </ul>
        </div>
    )
}

export default App
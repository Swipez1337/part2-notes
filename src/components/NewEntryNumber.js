const NewEntryNumber = ({value, onChange}) => {
    return (
        <div>
            <div>
                number: <input value={value}
                               onChange={onChange}/>
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </div>
    )
}

export default NewEntryNumber
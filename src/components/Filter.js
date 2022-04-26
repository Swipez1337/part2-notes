const Filter = ({value, onChange}) => {
    return (
        <form>
            <div>
                Filter: <input value={value}
                               onChange={onChange}/>
            </div>
        </form>
    )
}

export default Filter
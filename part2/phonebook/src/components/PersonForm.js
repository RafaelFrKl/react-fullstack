const PersonForm = ({ addPerson, name, number, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={name} onChange={handleNameChange} />
            </div>
            <div>
                Number: <input value={number} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
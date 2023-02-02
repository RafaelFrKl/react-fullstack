const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            Filter shown with: <input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter
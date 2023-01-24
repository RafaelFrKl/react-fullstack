const Statistics = ({good, neutral, bad, total}) => {
    if (total === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No Feedback Given</p>
            </div>
        )
    }
    let average = (good - bad) / total
    let percentage = (good / total) * 100

    return (
        <div>
            <h1>Statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {total}</p>
            <p>average {average}</p>
            <p>positive {percentage}%</p>
        </div>
    )
}

export default Statistics
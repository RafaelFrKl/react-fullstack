import StatisticLine from "./StatisticLine"

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
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={total} />
                    <StatisticLine text="average" value={average} />
                    <StatisticLine text="positive" value={percentage + '%'} />
                </tbody>
            </table>
        </div>
    )
}

export default Statistics
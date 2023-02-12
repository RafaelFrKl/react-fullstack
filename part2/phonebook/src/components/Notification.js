const Notification = ({ message, error}) => {
    if (message === null) {
        return null
    }

    else if (error) {
        return (
            <div className='error'>
                {message}
            </div>
        )
    }

    return (
        <div className='success'>
            {message}
        </div>
    )
}

export default Notification
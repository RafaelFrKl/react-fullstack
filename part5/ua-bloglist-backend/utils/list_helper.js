// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    // Returns sum of likes
    return blogs.reduce((total, currentValue) => total = total + currentValue.likes, 0)
}

const favoriteBlog = (blogs) => {
    const blogWithMostLikes = blogs.reduce(
        (prev, current) => {
            return prev.likes > current.likes ? prev : current
        }
    )
    return blogWithMostLikes
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    // Returns sum of likes
    return blogs.reduce((total, currentValue) => total = total + currentValue.likes, 0)
}

module.exports = {
    dummy,
    totalLikes
}
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let totalLikes = 0
    blogs.forEach(blog => 
        totalLikes += blog.likes
    )
    return totalLikes
}

module.exports = {
    dummy
}
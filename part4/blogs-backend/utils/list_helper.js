const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let totalLikes = 0
    blogs.forEach(blog => Number.isFinite(blog.likes) ? totalLikes += blog.likes : null
    )
    return totalLikes
}

const favoriteBlog = (blogs) => {
    let favoriteBlogIndex = 0
    if (blogs && blogs.length > 0) {
        favoriteBlogIndex = blogs.map(blog => blog.likes).indexOf(Math.max(...blogs.map(blog => blog.likes)))
    }
    else {
        return null
    }
    
   return favoriteBlog && {
    title: blogs[favoriteBlogIndex].title,
    author: blogs[favoriteBlogIndex].author,
    likes: blogs[favoriteBlogIndex].likes
   }
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}
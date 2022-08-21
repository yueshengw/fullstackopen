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

const mostBlog = (blogs) => {
    let authorList = []
    let tempList = []
    if (blogs && blogs.length > 0) {
        authorList = blogs.map(blog => blog.author)
        console.log(authorList)
        authorList.forEach(author1 => {
            let count = authorList.filter(author2 => author1 === author2).length
            tempList.push({
                author: author1,
                blogs: count
            })
        })
        return tempList.find(entry => entry.blogs === Math.max(...tempList.map(entry => entry.blogs)))
    }
    else {
        return null
    }
}

const mostLikes = (blogs) => {
    let authorListUO = []
    let authorList = []
    let tempList = []
    if (blogs && blogs.length > 0) {
        authorListUO = blogs.map(blog => blog.author)
        console.log(authorListUO)
        authorListUO.forEach(author => {
            let tempSum = 0
            console.log(blogs.filter(entry => entry.author === author))
            blogs.filter(entry => entry.author === author).forEach(entry => tempSum += entry.likes)
            tempList.push({
                author: author,
                likes: tempSum
            })
        })
        console.log(tempList)
        return tempList.find(entry => entry.likes === Math.max(...tempList.map(entry => entry.likes)))
    }
    else {
        return null
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlog,
    mostLikes
}
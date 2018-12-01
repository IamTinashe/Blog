import axios from 'axios'

const url = '/api/posts/'
const urlTwo = '/api/posts/blog/'

class PostService {
  //Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  //Create Post
  static insertPost(text) {
    return axios.post(url, {
      text
    })
  }

  //Deelet Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }

  static getPost(slug) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${urlTwo}${slug}`)
        const data = res.data
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default PostService

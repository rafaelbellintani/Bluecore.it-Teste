const PostRepository = require('../repository/postRepository')

module.exports = class PostService {
  static async list () {
    return await PostRepository.list()
  }

  static async listById (id) {
    return await PostRepository.listById(id)
  }

  static async insertPost (post) {
    return await PostRepository.insertPost(post)
  }
}

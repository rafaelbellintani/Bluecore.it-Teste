const CommentsRepository = require('../repository/commentRepository')

module.exports = class CommentService {
  // TODO: Criar m[etodos necessarios para listar os comentrios
  static async list () {
    return await CommentsRepository.list()
  }

  static async listById (id) {
    return await CommentsRepository.listById(id)
  }
}

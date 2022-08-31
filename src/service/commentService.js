const CommentRepository = require('../repository/commentRepository')

module.exports = class CommentService {
  // TODO: Criar m[etodos necessarios para listar os comentrios
  static async list () {
    return await CommentRepository.list()
  }

  static async listByPostId (id) {
    return await CommentRepository.listByPostId(id)
  }
}

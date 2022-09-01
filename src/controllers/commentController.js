const CommentService = require('../service/commentService')

module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static list (request, response, next) {
    CommentService.list()
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static listByPostId (request, response, next) {
    CommentService.listByPostId(request.params.postid)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static insertComment (request, response, next) {
    CommentService.insertPost(request.body)
      .then((unities) => {
        response.status(200).redirect(`/${request.body.postId}/post`)
      })
      .catch(next)
  }
}

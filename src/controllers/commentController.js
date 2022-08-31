const CommentService = require('../service/commentService')

module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static list (request, response, next) {
    CommentService.list()
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static listById (request, response, next) {
    CommentService.listById(request.params.id)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }
}

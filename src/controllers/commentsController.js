const CommentsService = require('../service/commentsService')

module.exports = class PostController {
  static list (request, response, next) {
    CommentsService.list()
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static listById (request, response, next) {
    CommentsService.listById(request.params.id)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }
}

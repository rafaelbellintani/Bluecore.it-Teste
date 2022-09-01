const PostService = require('../service/postService')

module.exports = class PostController {
  static list (request, response, next) {
    PostService.list()
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static listById (request, response, next) {
    PostService.listById(request.params.id)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static insertPost (request, response, next) {
    PostService.insertPost(request.body)
      .then((unities) => {
        response.status(200).redirect('/')
      })
      .catch(next)
  }
}

const database = require('../config/database')

module.exports = class PostRepository {
  static async list () {
    const result = await database
      .select(
        'Id',
        'Title',
        'Content',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Posts')

    return result
  }

  static async listById (id) {
    const result = await database
      .select(
        'Id',
        'Title',
        'Content',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Posts')
      .where({ 'Posts.Id': id })
      .first()

    return result
  }

  static async insertPost (newPost) {
    await database
      .insert(
        {
          Title: newPost.title,
          Content: newPost.content
        }
      ).into('Posts')
  }
}

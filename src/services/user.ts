import { nanoid } from 'nanoid'

import { User } from '../models'

class Controller {
  private users: User[]

  public constructor() {
    this.users = []
  }

  /**
   * Create
   */
  public async create(user: Omit<User, 'id'>) {
    const result: User = {
      id: nanoid(16),
      ...user,
    }
    this.users.push(result)

    console.log(this.users)

    return result
  }

  /**
   * List
   */
  public async list() {
    return this.users
  }

  /**
   * GetById
   */
  public async getById(id: string) {
    return this.users.find(user => user.id === id)
  }
}

export const UserController = new Controller()

const users = [
  { id: '1', nome: 'Paulo', email: 'prmorais@hotmail.com' },
  { id: '2', nome: 'Patricia', email: 'srta@hotmail.com' },
  { id: '3', nome: 'Fernanda', email: 'nanda@hotmail.com' }
]


export class User {
    static findAll(): Promise<any[]> {
      return Promise.resolve(users)
    }

    static findById(id: string): Promise<any> {
      return new Promise(resolve => {
        const filtered = users.filter(user => user.id === id)
        let user = undefined
        if (filtered.length > 0) {
          user = filtered[0]
        }
        resolve(user)
      })
    }
}
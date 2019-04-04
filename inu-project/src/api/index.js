const data = [
    {
      id: Date.now(),
      text: `ㅅㅂ 뷰개어려워`
    },
    {
      id: Date.now() + 1,
      text: `뷰어려워`
    },
    {
      id: Date.now() + 2,
      text: `결론=주노는 기여워`
    }
  ]
  
  const timeout = 500
  
  export const Post = {
    list() {
      return new Promise(resolve => {
        setTimeout(() => resolve(data), timeout)
      })
    },
    get(id) {
      return new Promise(resolve => {
        setTimeout(()=> {
          resolve(
            data.filter(post => post.id == id)[0]
          )
        }, timeout)
      })
    },
    create(text) {
      return new Promise(resolve => {
        setTimeout(() => {
          data.push({id: Date.now(), text})
          resolve()
        }, timeout)
      })
    },
    remove() {
  
    }
  }
  
  export const Auth = {
    login(email, pw) {
      return new Promise((resolve, reject) => {
        if (email !== 'test@test.com' || pw !== 'password123') return reject()
        const token = Math.random().toString(36).substring(2)
        localStorage.token = token
        this.onChange(true)
        resolve({token})        
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        delete localStorage.token
        this.onChange(false)
        resolve()
      })
    },
    loggedIn () {
      return !!localStorage.token
    },
    onChange() {}
  }
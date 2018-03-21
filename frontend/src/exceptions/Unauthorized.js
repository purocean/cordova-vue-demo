class Unauthorized {
  constructor (message) {
    this.message = message
  }
}

const unauthorized = message => {
  return new Unauthorized(message)
}

unauthorized.isInstance = (err) => {
  return (err instanceof Unauthorized)
}

export default unauthorized

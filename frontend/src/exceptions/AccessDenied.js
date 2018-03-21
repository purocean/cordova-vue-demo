class AccessDenied {
  constructor (message) {
    this.message = message
  }
}

const accessDenied = message => {
  return new AccessDenied(message)
}

accessDenied.isInstance = (err) => {
  return (err instanceof AccessDenied)
}

export default accessDenied

class InfoException {
  constructor (message) {
    this.message = message
  }
}

const infoException = message => {
  return new InfoException(message)
}

infoException.isInstance = (err) => {
  return (err instanceof InfoException)
}

export default infoException

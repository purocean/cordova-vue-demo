class NotFound {
  constructor (message, url) {
    this.message = message
    this.requestUrl = url
  }
}

const notFound = (message, url) => {
  return new NotFound(message, url)
}

notFound.isInstance = (err) => {
  return (err instanceof NotFound)
}

export default notFound

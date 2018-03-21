const restart = () => {
  if (navigator.splashscreen) {
    navigator.splashscreen.show()
  }
  window.location.href = 'app.html'
}

export default { restart }

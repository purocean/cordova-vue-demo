const restart = () => {
  if (navigator.splashscreen) {
    navigator.splashscreen.show()
  }
  window.location.href = 'mobile.html'
}

export default { restart }

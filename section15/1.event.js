let b = document.querySelector('#mybutton')
b.addEventListener('click', () => {
  console.log('Thanks for clicking me!')
})

document.addEventListener('click', handlerClick, {
  capture: true,
  once: true,
  passive: true,
})

document.dispatchEvent(new CustomEvent('busy', { detail: true }))

fetcu(url)
  .then(handleNetworkResponse)
  .catch(handleNetworkError)
  .finally(() => {
    document.dispatchEvent(new CustomEvent('busy', { detail: false }))
  })

document.addEventListener('busy', (e) => {
  e.detail ? showSpinner() : hideSpiner()
})

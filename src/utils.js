export function isInViewport(elem) {
  const rect = elem.getBoundingClientRect()
  const winHeight = window.innerHeight || document.documentElement.clientHeight
  const winWidth = window.innerWidth || document.documentElement.clientWidth
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= winHeight &&
    rect.right <= winWidth
  )
}

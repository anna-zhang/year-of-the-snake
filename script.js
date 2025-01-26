// Smooth scroll to Resolutions section
function scrollToResolutions () {
  document.getElementById('resolutions').scrollIntoView({
    behavior: 'smooth'
  })
}

// Smooth scroll back to the top (Greeting section)
function scrollToTop () {
  document.getElementById('greeting').scrollIntoView({
    behavior: 'smooth'
  })
}

// Add a preset resolution to the list
function addResolution (resolution) {
  const resolutionList = document.getElementById('resolutionList')
  const listItem = document.createElement('li')
  listItem.textContent = resolution
  resolutionList.appendChild(listItem)

  // Remove the resolution button from the list (so it can no longer be selected)
  const buttons = document.querySelectorAll('.resolution')
  buttons.forEach(button => {
    if (button.textContent === resolution) {
      button.disabled = true
      button.style.backgroundColor = '#d3d3d3' // Grayed out
    }
  })
}

// Add a custom resolution from the input field
function addCustomResolution () {
  const customResolutionInput = document.getElementById('customResolution')
  const resolution = customResolutionInput.value.trim()

  if (resolution) {
    addResolution(resolution)
    customResolutionInput.value = '' // Clear the input field
  }
}

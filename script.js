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

// Function for typewriter effect on multiple elements
function typeWriterEffect (elements, textArray, speed) {
  let index = 0
  let letterIndex = 0

  function typeWriter () {
    if (index < elements.length) {
      const element = elements[index]
      const text = textArray[index]

      if (letterIndex < text.length) {
        element.innerHTML += text.charAt(letterIndex)
        letterIndex++
        setTimeout(typeWriter, speed)
      } else {
        index++
        letterIndex = 0
        setTimeout(typeWriter, 500) // Delay before starting next element
      }
    } else {
      // Once typing is complete, fade in the arrow
      fadeInArrow()
    }
  }

  typeWriter()
}

// Function to fade in the arrow
function fadeInArrow () {
  const arrow = document.getElementById('down-arrow')
  arrow.classList.remove('hidden')
  arrow.classList.add('fade-in')
}

// Start the typewriter effect for all text elements in the greeting section
document.addEventListener('DOMContentLoaded', () => {
  const greetingHeadline = 'NEW YEAR, NEW ME'
  const greetingSubheadline = '(take two!)'
  const greetingMessage = 'HAPPY LUNAR NEW YEAR!'
  const greetingOne = "New Year's resolutions didn't last?"
  const greetingTwo = "Let's call it a trial run. Now it's the real deal."

  const textElements = [
    document.getElementById('greeting-headline'),
    document.getElementById('greeting-subheadline'),
    document.getElementById('greeting-lny-text'),
    document.getElementById('greeting-1'),
    document.getElementById('greeting-2')
  ]
  const textArray = [
    greetingHeadline,
    greetingSubheadline,
    greetingMessage,
    greetingOne,
    greetingTwo
  ]

  typeWriterEffect(textElements, textArray, 100) // Speed of 100ms per character
})

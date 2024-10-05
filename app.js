const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        const active = document.querySelector('.panel.active')
        active.className = 'panel'
        panel.className = 'panel active'
    })
})
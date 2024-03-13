console.log('here again')

const containers = document.querySelectorAll('.containea')

containers.forEach(container => {
    const btn = container.querySelector('.clickable');
    const show = container.querySelector('.unseen')
    const arrow = container.querySelector('.arrow')

    btn.addEventListener('click', () => {
        if(show.classList == 'unseen'){
            show.classList.remove('unseen')
            show.classList.add('seen')
        } else {
            show.classList.remove('seen')
            show.classList.add('unseen')
        }
    })
})
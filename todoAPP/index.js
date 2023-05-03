const card = document.querySelector('.card')

function add() {
    card.children[2].children[0].innerHTML += `<li><p>${card.children[3].value}</p><span class="del">X</span></li>`
    card.children[3].value = ''
    const del = document.querySelectorAll('.card .todo ul li .del')

    del.forEach(element => {
        element.addEventListener('click', () => {
            element.parentElement.remove()
        })
    })
}

card.children[3].addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        card.children[2].children[0].innerHTML += `<li><p>${card.children[3].value.trim()}</p><span class="del">X</span></li>`
        card.children[3].value = ''
        const del = document.querySelectorAll('.card .todo ul li .del')

        del.forEach(element => {
            element.addEventListener('click', () => {
                element.parentElement.remove()
            })
        })
    }
})

const search = document.getElementById('search')

search.addEventListener('keyup', e => {
    const term = e.target.value.trim().toLowerCase()
    filteredToDo(term)
})

filteredToDo = terms => {
    Array.from(card.children[2].children[0].children)
    .filter(todo => !todo.textContent.toLowerCase().includes(terms))
    .forEach(todo => todo.classList.add('filtered'))

    Array.from(card.children[2].children[0].children)
    .filter(todo => todo.textContent.toLowerCase().includes(terms))
    .forEach(todo => todo.classList.remove('filtered'))
}
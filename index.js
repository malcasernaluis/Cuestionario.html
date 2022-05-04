const lista = $('.list')
let items = []

const agregar = item => items.push(item)

const eliminar = item => items = items.filter(e => e !== item)

$('label').children('input').each(function (index) {
    const item = $(this)
    item.on('change', () => {
        const state = $(this).prop('checked')
        const item = $(this).parent().text()

        return state ? agregar(item) : eliminar(item)
    })
});

$('.button-procesar').on('click', () => {
    lista.children().remove()
    items.forEach(element => lista.append(`<p>${element}</p>`))
})
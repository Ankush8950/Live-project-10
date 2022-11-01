const listItem = document.getElementById('item-lists')
const menu = document.getElementById('menu')


menu.addEventListener('click',function(){
    if(listItem.style.display === 'none'){
        listItem.style.display = 'block'
    }
    else{
        listItem.style.display = 'none'
    }
})
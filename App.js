const togglebtn = document.querySelector('.toggle_btn')
const togglebtnicon = document.querySelector('.toggle_btn i')
const dropdownmenu = document.querySelector('.dropdown__menu')

togglebtn.onclick = function () {
dropdownmenu.classList.toggle('open')
const isopen = dropdownmenu.classList.contains('open')


}
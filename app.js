window.addEventListener('DOMContentLoaded',  () => {
    const slider = document.querySelector('.slider');
    const active = document.querySelector('#active')
    const line_1 = document.querySelector('#line-1')
    const line_2 = document.querySelector('#line-2')
    const line_3 = document.querySelector('#line-3')
    const line_4 = document.querySelector('#line-4')
    const container = document.querySelector('.container');


    line_1.addEventListener('click', function(){
        slider.style.transform = 'translateX(0)'
        active.style.top = '0';
        container.style.background = 'yellow'
    })
    line_2.addEventListener('click', function(){
        slider.style.transform = 'translateX(-25%)'
        active.style.top = '80px';
        container.style.background = 'blue'
    })
    line_3.addEventListener('click', function(){
        slider.style.transform = 'translateX(-50%)'
        active.style.top = '160px';
        container.style.background = 'green'
    })
    line_4.addEventListener('click', function(){
        slider.style.transform = 'translateX(-75%)'
        active.style.top = '240px';
        container.style.background = 'crimson'
    })
})
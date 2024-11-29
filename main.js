const title = document.querySelector('.title')
const rock =document.querySelector('.rock')
const rock1 =document.querySelector('.rock1')
const fog3 =document.querySelector('.fog3')
const mount1 =document.querySelector('.mount1')
const mountain =document.querySelector('.mountain')
const fog5 =document.querySelector('.fog5')
const fog4 =document.querySelector('.fog4')
const island =document.querySelector('.island')
const mount =document.querySelector('.mount')
document.addEventListener('scroll' , function(){
    let value  = window.scrollY
    // console.log(value);
    title.style.marginTop = value*2.5+'px'

    
    rock1.style.marginLeft = value + 'px'
    mount.style.marginLeft = -value + 'px'
//    t1 moun.style.marginTop  =value *4 +'px'
    rock.style.marginLeft = value + 'px'
    fog5.style.marginLeft = -value + 'px'
    fog3.style.marginLeft = -value * 6+ 'px'
    
})
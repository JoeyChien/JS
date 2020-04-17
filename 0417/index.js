$(document).ready(() => {

    /* JS ver */
    // document.querySelector('#btn').addEventListener('click', function() {
    //     document.querySelector('h1').classList.toggle('large')
    // })
   
    $('#btn').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        //$('h1').toggle('slow');
        //$('h1').toggleClass('hide');
        $('h1').toggleClass('large');
        console.log('btn clicked');
    })
    
    let counter = 0;
    $('#addItem').on('click', function(){
        $('#container').prepend(`<li class='item'>Item${counter}</li>`)
        counter++
    })

    //對網頁初始load完後沒有的元素，需綁定其父元素
    $('#container').on('click', '.item',function(){
        $(this).toggleClass('large')
    })

    $('.wrapper').on('click', function(){
        console.log('warrper clicked');
        //拔掉#btn的事件
        $('#btn').off('click')
    })

    $('h1').on('mouseover', function() {
        for(let i = 1; i < 5; i++){
            // alert('boom!!')
        }
    })
})
$( document ).ready(function() {    
    $('#addImg').on('click', function(){
        let url = $('#imgUrl').val();
        $('#imgList').prepend(`<div class="col-6 col-md-4 mt-2 mb-2">
                                <img src='${url}' class="img-thumbnail">
                              </div>`)
    })
});


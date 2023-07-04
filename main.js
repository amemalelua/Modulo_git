$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const listTaref = $('input').val();
        const classList = $('.listen');
        const newTaref = `<li>${listTaref}</li>`;
        $(newTaref).appendTo(classList);
        $('input').val('');
    });

    $('ul').on('click','li', function() {
        $(this).addClass('concluded')
    })
});
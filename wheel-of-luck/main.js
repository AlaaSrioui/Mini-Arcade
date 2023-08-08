var options = []
var position = 0

var wheel = $('.wheel');
var spinBtn = $('.spinBtn');
var value = Math.ceil(Math.random() * 3600)

$('#addBtn').on('click', () => {
    if(position <= 8){
        if(position % 2 === 0){
            $(`#${position}`).css({'color' : 'rgba(0,212,255,1)'})
            var inputVal = $('#addInput').val()
            $(`#${position}`).text(inputVal)
        } else {
        
        var inputVal = $('#addInput').val()
        $(`#${position}`).css({'color' : 'rgb(2,0,36)'})
        $(`#${position}`).text(inputVal)
        }
        position++
    }
    $('#addInput').val('')
})



$('#clearBtn').on('click', () => window.location.reload())


spinBtn.on( "click", () => {
    wheel.css({'transform' : `rotate(${value}deg)`})
    value = Math.ceil(Math.random() * 3600)
});
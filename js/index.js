$(document).ready(function(){
    var timer = $(".timer");
    timer.text();
    var seconds = parseInt(timer.text().substring(0,2) * 60) + parseInt(timer.text().substring(3,5))

    function countdown(){
        
        update_timer()
        seconds -= 1
        timeout = setTimeout(countdown,1000)
        if(seconds < 0) {
            timer.text("00:00")
        }
    }

    function update_timer(){
        if(seconds > 0){
            var curr_remaining_minutes = parseInt(seconds / 60)
            var curr_remaining_seconds = seconds % 60
            
            var formatted_minutes = String(curr_remaining_minutes).padStart(2,'0');
            var formatted_seconds = String(curr_remaining_seconds).padStart(2,'0');
    
            var curr_remaining_time = formatted_minutes + ":" + formatted_seconds
           
            timer.text(curr_remaining_time)
        }
    }

    $(".play").click(() => {
        $(".pause").removeClass("hidden")
        $(".play").addClass("hidden")
        countdown()
    })

    $(".pause").click(() => {
        $(".play").removeClass("hidden")
        $(".pause").addClass("hidden")
        if(timeout){
            clearTimeout(timeout)
        }
    })

    $(".reset").click(() => {
        if(timeout){
            clearTimeout(timeout)
        }
        $(".dialogue").removeClass("hidden")
        $(".set-timer").removeClass("hidden")
        $(".play").removeClass("hidden")
        $(".pause").addClass("hidden")
    })

    $("#minutes").on('input', () => {
        var minutes = $("#minutes")
        if(minutes.val() > 999){
            minutes.val(999)
        }
    })

    $("#seconds").on("input", () => {
        var seconds = $("#seconds")
        if(seconds.val() > 59){
            seconds.val(59)
        }
    })
    
    $(".submit-button").click( () => {
        seconds = parseInt($("#minutes").val() * 60) + parseInt($("#seconds").val())
        console.log(seconds)
        update_timer()
        $(".dialogue").addClass("hidden")
        $(".set-timer").addClass("hidden")
    })
}
);
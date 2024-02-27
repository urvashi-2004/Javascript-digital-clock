function call(){
    var cd = new Date()
    var date = cd.getDate()
    var day = cd.getMonth()
    var year = cd.getFullYear()
    var pre = cd.getDate() + " / " + (cd.getMonth()+1) + " / " + cd.getFullYear()
    var res =cd.getHours() + " : " + cd.getMinutes() + " : " + cd.getSeconds() 
    result.innerHTML = pre + `<br><br>` + res
}

    function start (){
        setInterval(call,1000);
    }


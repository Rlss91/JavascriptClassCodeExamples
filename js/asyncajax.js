function ajax_get_promise(url) {
    // console.log(url)
    return new Promise(function (ok, notok) {
        var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         console.log(this.responseText)
        //         ok(this.responseText)
        //         // fun(this.responseText)
        //     }
        // };
        xhttp.onload = function () {
            ok(this.responseText)
        }
        xhttp.onerror = function () {
            notok('error')
        }
        xhttp.open("GET", url, true)//async = true;
        xhttp.send();
    })
}
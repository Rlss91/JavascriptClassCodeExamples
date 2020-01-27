function ajax_get(url, fun) {
    // console.log(url)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            fun(this.responseText)
        }
    };
    xhttp.open("GET", url, true)//async = true;
    xhttp.send();
}
function ajax_post(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            // document.getElementById("demo").innerHTML = this.responseText;
            console.log(this.responseText)
        }
        else {
            console.log(this.status, this.readyState)
        }
    };
    xhttp.open("POST", url, true)//async = true;
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("title=foo&body=bar&userId=1");
}
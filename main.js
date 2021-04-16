// how to make a function that stores the name of visitor in a cookie variable:
function createCookie(cookieName, cookieValue, killTime) {
    // create the time to die for the cookie
    // make it short
    var d = new Date();
    d.setTime(d.getTime() + (killTime * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    //creates the standard for a cookie
    document.cookie = cookieName + "=" + cookieValue + ";" + killTime + ";path=/"
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodeCookie = decodeURIComponent(document.cookie);
    var array = decodeCookie.split(';');
    for (var index = 0; index < array.length; index++) { // noramlly I would use let for memory issues
        var read = array[index];
        while (read.charAt(0) == ' ') {
            read.substring(1);
        }
    }
    if (read.indexOf(name) == 0) {
        return c.substring(name.length, read.length);

    }
}

function setCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
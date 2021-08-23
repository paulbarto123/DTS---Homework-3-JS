$(document).ready(function () {
    var interval = setInterval(function () {
    var currentTime = moment();
    $(".date").html(
        currentTime.format("DD MMMM YYYY") +
        " " +
        currentTime.format("dddd").substring(0, 3)
    );
    $(".time").html(currentTime.format("hh:mm:ss A"));
    }, 100);    
});

const Validate = (evt) => {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
        key = theEvent.clipboardData.getData("text/plain");
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function Select() {
    $(".convert__number").val("");
    $(".converter__result").html("");
}

const Change= () => {
    document.body.style.backgroundColor = $(".background__input").val();
}


const Conv = () => {
    const res = ConvertTemp($(".degree__from").val(),
    $(".degree__to").val(),
    parseInt($(".convert__number").val())
    );
    $(".converter__result").html(res);
    document.querySelector(".fromNumber").nodeValue;
}
let postCount = 0;

window.onload = function() {
    document.getElementById("top").innerHTML = "Welcome to the Forum";

    let buttons = document.getElementsByTagName("button");
    let postButton = buttons[0]; 
    let clearButton = buttons[1]; 

    postButton.onclick = function() {
        let msg = document.getElementById("message").value;

        if (msg.trim() === "") {
            alert("กรุณาพิมพ์ข้อความครับ");
            return;
        }

        postCount++;

        if (postCount === 1) {
            document.getElementById("topic").innerHTML = msg;
        } else if (postCount === 2) {
            document.getElementById("reply1").innerHTML = msg;
        } else if (postCount === 3) {
            document.getElementById("reply2").innerHTML = msg;
        } else {
            alert("โพสต์ครบ 3 ครั้งแล้ว กรุณากด Clear");
        }

        document.getElementById("message").value = "";
    };

    clearButton.onclick = function() {
        document.getElementById("topic").innerHTML = "";
        document.getElementById("reply1").innerHTML = "";
        document.getElementById("reply2").innerHTML = "";
        document.getElementById("message").value = "";
        
        postCount = 0; 
    };
};
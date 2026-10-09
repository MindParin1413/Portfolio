let timer = null;

window.onload = function() {
    document.getElementById('btn-start').onclick = startGame;
};

function startGame() {
    // รีเซ็ตเกมก่อนเริ่มใหม่เสมอ
    clearScreen();
    
    // สร้างสี่เหลี่ยมและเริ่มจับเวลา
    addBox();
    timeStart();
}

function addBox() {
    let numBox = parseInt(document.getElementById('num-box').value);
    let colorBox = document.getElementById('color-box').value;
    let gameLayer = document.getElementById('game-layer');

    for (let i = 0; i < numBox; i++) {
        let tempbox = document.createElement('div');
        tempbox.className = 'square';
        tempbox.id = "box" + i;
        tempbox.style.backgroundColor = colorBox;

        // สุ่มตำแหน่งให้อยู่ในกรอบของ game-layer
        let layerWidth = gameLayer.offsetWidth - 40; // ลบความกว้างสี่เหลี่ยม
        let layerHeight = gameLayer.offsetHeight - 40; // ลบความสูงสี่เหลี่ยม
        
        let x = Math.random() * layerWidth;
        let y = Math.random() * layerHeight;
        
        tempbox.style.left = x + 'px';
        tempbox.style.top = y + 'px';

        // เพิ่มสี่เหลี่ยมลงในพื้นที่เกม
        gameLayer.appendChild(tempbox);
        
        // ผูกฟังก์ชันเมื่อถูกคลิก
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function() {
        // ลบสี่เหลี่ยมที่ถูกคลิก
        this.parentNode.removeChild(this);
        
        // ตรวจสอบว่าชนะหรือไม่ (ลบหมดแล้ว)
        let remainingBoxes = document.querySelectorAll('.square').length;
        if (remainingBoxes === 0) {
            clearInterval(timer);
            setTimeout(() => {
                alert("ยินดีด้วย! คุณชนะแล้ว 🎉");
                clearScreen();
            }, 100);
        }
    };
}

function timeStart() {
    let timeLeft = 30;
    let clock = document.getElementById('clock');
    clock.innerHTML = timeLeft;

    // เคลียร์ Timer เก่า (ถ้ามี) ก่อนตั้งใหม่
    clearInterval(timer);
    
    // ตั้งเวลานับถอยหลังทุกๆ 1 วินาที
    timer = setInterval(function() {
        timeLeft--;
        clock.innerHTML = timeLeft;

        if (timeLeft <= 0) {
            // เมื่อเวลาหมด
            clearInterval(timer);
            let remainingBoxes = document.querySelectorAll('.square').length;
            if (remainingBoxes > 0) {
                setTimeout(() => {
                    alert("หมดเวลา! คุณแพ้แล้ว 😢");
                    clearScreen();
                }, 100);
            }
        }
    }, 1000);
}

function clearScreen() {
    let gameLayer = document.getElementById('game-layer');
    gameLayer.innerHTML = ''; // ลบสี่เหลี่ยมทั้งหมด
    document.getElementById('clock').innerHTML = 30; // รีเซ็ตตัวเลขเวลาแสดงผล
    clearInterval(timer);
}
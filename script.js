// ==========================================
// 1. ฟังก์ชันสำหรับป๊อปอัปรูปภาพ (Image Modal)
// ==========================================

// ฟังก์ชันสำหรับเปิดรูปขยายใหญ่
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    
    // ตรวจสอบว่ามี element ป๊อปอัปอยู่จริง (ป้องกัน Error ในหน้าเว็บที่ไม่มีรูป)
    if (modal && modalImg) {
        modalImg.src = imageSrc; // เอารูปที่คลิกมาใส่ในกล่อง
        modal.classList.add("show"); // สั่งให้กล่องแสดงขึ้นมา
    }
}

// ฟังก์ชันสำหรับปิดรูปลง
function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.classList.remove("show"); // สั่งซ่อนกล่อง
    }
}

// เพิ่มลูกเล่น: ปิดป๊อปอัปเมื่อผู้ใช้กดปุ่ม ESC บนคีย์บอร์ด
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


// ==========================================
// 2. การทำงานพื้นฐานตอนโหลดหน้าเว็บเสร็จ
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // เช็คว่า JavaScript เชื่อมต่อกับ HTML สมบูรณ์
    console.log("เว็บไซต์โหลดเสร็จสมบูรณ์ พร้อมใช้งาน!");

    // เพิ่มลูกเล่นการเก็บ Log เวลาคนกดคลิกดูงาน Assignment
    const assignmentLinks = document.querySelectorAll('.assignment-list a');
    
    assignmentLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`กำลังเปิดงาน: ${this.innerText}`);
        });
    });
});
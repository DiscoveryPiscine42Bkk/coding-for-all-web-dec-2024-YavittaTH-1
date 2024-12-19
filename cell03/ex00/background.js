// ดึงปุ่มจาก DOM
const button = document.getElementById("changeColorButton");

// ฟังก์ชันสำหรับสุ่มสี
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// เพิ่ม event listener ให้ปุ่ม
button.addEventListener("click", () => {
    // เปลี่ยนสีพื้นหลังแบบสุ่ม
    document.body.style.backgroundColor = getRandomColor();
});

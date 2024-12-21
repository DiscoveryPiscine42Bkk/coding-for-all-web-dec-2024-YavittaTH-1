// รอให้ DOM โหลดเสร็จก่อน
$(document).ready(function () {
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
    $("#changeColorButton").on("click", function () {
        // เปลี่ยนสีพื้นหลังแบบสุ่ม
        $("body").css("background-color", getRandomColor());
    });
});

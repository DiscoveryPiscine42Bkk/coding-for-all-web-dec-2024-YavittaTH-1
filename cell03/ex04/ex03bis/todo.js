$(document).ready(function () {
    // โหลด To-Do List จากคุกกี้เมื่อเปิดหน้าเว็บ
    loadToDo();

    // เมื่อกดปุ่ม New เพื่อเพิ่ม To-Do ใหม่
    $("#newBtn").on("click", function () {
        const todoText = prompt("Enter your TO DO:");
        if (todoText && todoText.trim() !== "") {
            addToDo(todoText);
            saveToDo();
        }
    });

    // ฟังก์ชันเพิ่ม To-Do ไปที่ DOM
    function addToDo(text) {
        const $toDoDiv = $("<div></div>")
            .text(text)
            .css({
                padding: "10px",
                margin: "5px 0",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
            })
            .on("click", function () {
                deleteToDo($(this));
            });
        $("#ft_list").prepend($toDoDiv); // เพิ่มที่ด้านบนสุด
    }

    // ฟังก์ชันลบ To-Do
    function deleteToDo($toDoDiv) {
        if (confirm("Do you really want to delete this TO DO?")) {
            $toDoDiv.remove();
            saveToDo();
        }
    }

    // ฟังก์ชันบันทึก To-Do List ลงคุกกี้
    function saveToDo() {
        const toDoArray = [];
        $("#ft_list div").each(function () {
            toDoArray.push($(this).text());
        });
        document.cookie = "todo=" + encodeURIComponent(JSON.stringify(toDoArray)) +"; path=/;";
    }

    // ฟังก์ชันโหลด To-Do List จากคุกกี้
    function loadToDo() {
        const todoCookie = document.cookie.split("; ").find(row => row.startsWith("todo="));
        console.log(todoCookie);
        if (todoCookie) {
            const toDoArray = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
            toDoArray.reverse().forEach(item => addToDo(item));
        }
    }
});

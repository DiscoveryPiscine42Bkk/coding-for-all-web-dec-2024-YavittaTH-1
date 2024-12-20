$(document).ready(function () {
    const $balloon = $('#balloon');
    let currentSize = 200;
    let colorIndex = 0;
    const colors = ['red', 'green', 'blue'];
    const maxSize = 420;
    const minSize = 200;

    // Function to change the color
    function changeColor() {
        colorIndex = (colorIndex + 1) % colors.length;
        $balloon.css('background-color', colors[colorIndex]);
    }

    // Function to grow the balloon
    function growBalloon() {
        if (currentSize < maxSize) {
            currentSize += 10;
        } else {
            // Explode the balloon and reset to original size
            currentSize = 200;
        }
        $balloon.css({
            width: currentSize + 'px',
            height: currentSize + 'px',
        });
        changeColor();
    }

    // Function to shrink the balloon when mouse leaves
    function shrinkBalloon() {
        if (currentSize > minSize) {
            currentSize -= 5;
        }
        $balloon.css({
            width: currentSize + 'px',
            height: currentSize + 'px',
        });
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        $balloon.css('background-color', colors[colorIndex]);
    }

    // Event listeners
    $balloon.on('click', growBalloon);
    $balloon.on('mouseleave', shrinkBalloon);
});

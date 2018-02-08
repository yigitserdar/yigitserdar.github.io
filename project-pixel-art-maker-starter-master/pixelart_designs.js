// Pixel Art Maker script

function makeGrid() {
    // Creating variables
    let rows = $('#input_height').val();
    let cols = $('#input_width').val();
    let color;

    // Deleting existing grid
    $('#pixel_canvas').children().remove();

    // Creating grid
    for (let i = 0; i < rows; i++) {
        $('#pixel_canvas').append('<tr></tr>');
        };
    for (let j = 0; j < cols; j++) {
            $('tr').append('<td></<td>');
        };

    // Fill clicked "pixel"
    $('td').on('click', function () {
        color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
    });
}

// Avoiding default submit function - reload
// and calling makeGrid function instead
$("input[type='submit']").click(function (event) {
    event.preventDefault();
    makeGrid();
});

function makeGridRandomly() {
    // Creating variables
    let rows = $('#inputHeight').val();
    let cols = $('#inputWidth').val();
    let color;

    // Deleting existing grid
    $('#pixel_canvas').children().remove();

    // Creating grid
    for (let i = 0; i < rows; i++) {
        $('#pixel_canvas').append('<tr></tr>');
        };
    for (let j = 0; j < cols; j++) {
            $('tr').append('<td></<td>');
        };

    // Fill clicked "pixel"
    $('td').on('click', function () {
        color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
    });
}

// Avoiding default submit function - reload
// and calling makeGrid function instead
$("input[type='submit']").click(function (event) {
    event.preventDefault();
    makeGrid();
});
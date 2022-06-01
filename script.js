// Current date 
var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

//update current time to index
$('#currentDay').text(currentDate);

var saveBtnEl = $('.saveBtn');
var allHours = ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5']

//grabbing the date of user input
function handleFormSubmit() {
    var text = $(this).siblings('textarea').val();
    var timeId = $(this).parent().attr('id');
    saveData(timeId, text);
}


$('#8Btn').on('click', function (event) {
    var userInput = $('#8Text').val();
    e.preventDefault();
    localStorage.setItem('8', userInput);
})

$('#8Text').val(localStorage.getItem('8'));


$('#9Btn').on('click', function (event) {
    var userInput = $('#9Text').val();
    e.preventDefault();
    localStorage.setItem('9', userInput);
})

$('#9Text').val(localStorage.getItem('9'));



$('#10Btn').on('click', function (event) {
    var userInput = $('#10Text').val();
    e.preventDefault();
    localStorage.setItem('10', userInput);
})

$('#10Text').val(localStorage.getItem('10'));


$('#11Btn').on('click', function (event) {
    var userInput = $('#11Text').val();
    e.preventDefault();
    localStorage.setItem('11', userInput);
})

$('#11Text').val(localStorage.getItem('11'));


$('#12Btn').on('click', function (event) {
    var userInput = $('#12Text').val();
    e.preventDefault();
    localStorage.setItem('12', userInput);
})

$('#12Text').val(localStorage.getItem('12'));


$('#1Btn').on('click', function (event) {
    var userInput = $('#1Text').val();
    e.preventDefault();
    localStorage.setItem('1', userInput);
})

$('#1Text').val(localStorage.getItem('1'));


$('#2Btn').on('click', function (event) {
    var userInput = $('#2Text').val();
    e.preventDefault();
    localStorage.setItem('2', userInput);
})

$('#2Text').val(localStorage.getItem('2'));


$('#3Btn').on('click', function (event) {
    var userInput = $('#3Text').val();
    e.preventDefault();
    localStorage.setItem('3', userInput);
})

$('#3Text').val(localStorage.getItem('3'));



$('#4Btn').on('click', function (event) {
    var userInput = $('#4Text').val();
    e.preventDefault();
    localStorage.setItem('4', userInput);
})

$('#4Text').val(localStorage.getItem('4'));



$('#5Btn').on('click', function (event) {
    var userInput = $('#5Text').val();
    e.preventDefault();
    localStorage.setItem('5', userInput);
})

$('#5Text').val(localStorage.getItem('5'));


var today = dayjs();
var timeBlockEl = document.querySelector('.container');

$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm a'));

$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});
// Get item from local storage if any

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));



function checkTimeBlocks() {
  // Get the current hour
  var currentHour = dayjs().hour();
  console.log(currentHour);

  // Loop through each time-block
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").slice(5)); // Use slice(5) to remove the "hour-" prefix
    console.log(blockHour);

    // Convert negative block hours to positive block hours
    if (blockHour < 0) {
      blockHour = 24 + blockHour;
    }

    // Check if we've moved past this time-block
    if (blockHour < currentHour) {
      $(this).removeClass("present future");
      $(this).addClass("past");
    }
    // Check if this is the current time-block
    else if (blockHour === currentHour) {
      $(this).removeClass("past future");
      $(this).addClass("present");
    }
    // Otherwise, this is a future time-block
    else {
      $(this).removeClass("past present present-future");
      $(this).addClass("future");
    }
  });
}




// Call checkTimeBlocks to update the time-blocks on page load
checkTimeBlocks();

// Update the time-blocks every hour
setInterval(checkTimeBlocks, 60 * 60 * 1000); // 1 hour in milliseconds

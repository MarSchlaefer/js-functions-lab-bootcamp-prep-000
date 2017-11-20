// write your code below!
var name = "you"
var holiday = "Independence Day"
var days = "20"

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  if (name === "you") {
    return ("Happy holidays, ${name}!")
  }
}

function happyHolidayTo(holiday, name) {
  return ("Happy ${holiday}, ${name}!")
}

holiday = "Mother's Day"

function holidayCountdown(days, holiday) {
  return ("It's ${days} days until ${holiday}!")
}
function checkStringLength (string, lenght) {
  return string.length <= lenght;
}

checkStringLength ('проверяемая строка', 20);
checkStringLength ('проверяемая строка', 18);
checkStringLength ('проверяемая строка', 10);

function isPalindrome (rawString) {
  const string = rawString.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

function extractNumber (rawString) {
  const string = rawString.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }

  return parseInt(result, 10);
}

extractNumber ('2023 год');
extractNumber ('ECMAScript 2022');
extractNumber ('1 кефир, 0.5 батона');
extractNumber ('агент 007');
extractNumber ('а я томат');
extractNumber ('2023');
extractNumber ('-1');
extractNumber ('1.5');

const timeToString = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return hours * 60 + Number(minutes);
};

const isWorkingTime = (startWork, endWork, startMeeting, longMeeting) => {
  startWork = timeToString(startWork);
  endWork = timeToString(endWork);
  startMeeting = timeToString(startMeeting);
  return startMeeting >= startWork && startMeeting + longMeeting <= endWork;
};

isWorkingTime('08:00', '17:30', '14:00', 90);
isWorkingTime('8:0', '10:0', '8:0', 120);
isWorkingTime('08:00', '14:30', '14:00', 90);
isWorkingTime('14:00', '17:30', '08:0', 90);
isWorkingTime('8:00', '17:30', '08:00', 900);

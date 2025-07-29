module.exports = function toReadable(number) {
  const num = number;
  let readableStr = '';

  function getNumberAsWord(currentNum) {
    let currentNumStr = '';
    switch (currentNum) {
      case 0:
        currentNumStr = 'zero';
        break;
      case 1:
        currentNumStr = 'one';
        break;
      case 2:
        currentNumStr = 'two';
        break;
      case 3:
        currentNumStr = 'three';
        break;
      case 4:
        currentNumStr = 'four';
        break;
      case 5:
        currentNumStr = 'five';
        break;
      case 6:
        currentNumStr = 'six';
        break;
      case 7:
        currentNumStr = 'seven';
        break;
      case 8:
        currentNumStr = 'eight';
        break;
      case 9:
        currentNumStr = 'nine';
        break;
      case 10:
        currentNumStr = 'ten';
        break;
      case 11:
        currentNumStr = 'eleven';
        break;
      case 12:
        currentNumStr = 'twelve';
        break;
      case 13:
        currentNumStr = 'thirteen';
        break;
      case 14:
        currentNumStr = 'fourteen';
        break;
      case 15:
        currentNumStr = 'fifteen';
        break;
      case 16:
        currentNumStr = 'sixteen';
        break;
      case 17:
        currentNumStr = 'seventeen';
        break;
      case 18:
        currentNumStr = 'eighteen';
        break;
      case 19:
        currentNumStr = 'nineteen';
        break;
      case 20:
        currentNumStr = 'twenty';
        break;
      case 30:
        currentNumStr = 'thirty';
        break;
      case 40:
        currentNumStr = 'forty';
        break;
      case 50:
        currentNumStr = 'fifty';
        break;
      case 60:
        currentNumStr = 'sixty';
        break;
      case 70:
        currentNumStr = 'seventy';
        break;
      case 80:
        currentNumStr = 'eighty';
        break;
      case 90:
        currentNumStr = 'ninety';
        break;
      default:
        currentNumStr = '';
        break;
    }
    readableStr += currentNumStr;
  }

  function lessTwentyNum() {
    getNumberAsWord(num);
  }

  function lessHundredNum() {
    const secondNum = num % 10;
    const firstNum = secondNum === 0 ? num : num - secondNum;

    getNumberAsWord(firstNum);

    if (secondNum !== 0) {
      readableStr += ' ';
      getNumberAsWord(secondNum);
    }
  }

  function moreHundredNum() {
    const firstNum = Math.trunc(num / 100);

    getNumberAsWord(firstNum);

    readableStr += ' ';
    readableStr += 'hundred';
    if (num % 100 !== 0) {
      if (num % 100 < 20) {
        readableStr += ' ';

        const secondNum = num % 100;
        getNumberAsWord(secondNum);
      } else {
        readableStr += ' ';

        const thirdNum = num % 10;
        const secondNum = (num % 100) - thirdNum;

        getNumberAsWord(secondNum);

        if (thirdNum !== 0) {
          readableStr += ' ';
          getNumberAsWord(thirdNum);
        }
      }
    }
  }

  if (num < 20) {
    lessTwentyNum();
  } else if (num >= 20 && num < 100) {
    lessHundredNum();
  } else if (num >= 100 && num < 1000) {
    moreHundredNum();
  }

  return readableStr;
};

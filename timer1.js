let myArgs = process.argv.slice(2).map(ele=>ele = Number(ele));
// console.log('myArgs: ', myArgs);

const makeSound = ()=>{
  process.stdout.write('\x07');
};
const shouldMakeSound = (input) => {
  let shouldMakeSound;
  if (!input || typeof(input) !== "number") {
    shouldMakeSound === false;
  } else if (input >= 0) {
    shouldMakeSound = true;
  }
  return shouldMakeSound;
};

const loop = ()=>{
// let time=0;
  for (arg of myArgs) {
    // console.log(arg);
    // time += arg*1000;
    if (shouldMakeSound(arg)) {
      setTimeout(makeSound, arg * 1000);
    }
  }
};
loop();


// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
//     process.stdout.write('\x07');
// }
// alertTerminal();
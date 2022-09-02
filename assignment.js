// function sayHello(name) {
//   console.log('Hi ' + name);
// }
const DEFAULT_GREETING = "USER";

const sayHello = (greeting, name = DEFAULT_GREETING) =>
  console.log(greeting + " " + name);

const sayHowdy = () => console.log("Howdy Pardner");

const getUserName = (userName) => userName;

const checkInput = (emptyHandler, ...strings) => {
  let hasEmptyString = false;
  for (const string of strings) {
    if (!string) {
      hasEmptyString = true;
      break;
    }
    console.log(string);
  }
  if (hasEmptyString) {
    emptyHandler();
  }
};

const emptyStringError = () => {
  alert("A string is empty.");
};

sayHello("Hello");
sayHowdy();
console.log(getUserName("Tony"));
checkInput(emptyStringError, 'hey', '', 'hiya');

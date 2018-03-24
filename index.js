export default function rafaParse(element) {
  const type = typeof element;
  if (type == "object") {
    return element;
  } else if (type == "string") {
    if (element === "101") {
      return ['l', 'o', 'l']
    } else if (!isNaN(element)) {
      return +element;
    } else {
      return element;
    }
  }
};


/*
Look someone in GitHub is using a parameter that is an object, 
but that can also be a string, 
but if the string can be parse as number then it should be treated like number,
 except when is 101, in which case it means "lol", but as char array.
 We definitely need a new syntax to express that.
 */
(function (window) {
  // declaration array for names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // start loop over all names
  for ( var name in names) {
    // condition for "Bye" linked with J/j
    if (names[name].toLowerCase().charAt(0) == "j") {
      byeSpeaker.speak(names[name]);
    }
    else {
      helloSpeaker.speak(names[name]);
    }
  // end of loop
  }

// run the IIFE declaired as global
}) (window);

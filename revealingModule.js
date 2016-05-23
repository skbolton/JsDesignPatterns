/*
  Revealing Module Pattern
  Created by Christian heilmann
  He became frustrated that he had to repeat the name of the main object when he wanted to call a public mehtod. He also disliked having to switch to object literal notation for the things he wished to return
*/
 //------I USED THIS ALL ALONG NATUALLY ------------

var myRevealingModule = (function() {
  var privateVar = "Ben Cherry",
      publicVar = "Hey There!";
  function privateFunction() {
    console.log("Name: " + privateVar );
  }
  function publicSetName(strName) {
    privateVar = strName
  }
  function publicGetName() {
    privateFunction();
  }

  // reveal public pointer to
  // private functions and properties
  return {
    setName: publicSetName,
    greetings: publicVar,
    getName: publicGetName
  };
}());
myRevealingModule.setName('Paul Kinlan');

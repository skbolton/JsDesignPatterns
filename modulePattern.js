var myModule = {
  myProperty: "someValue",
  //object literals can contain props and methods
  // e.g we can define further objects
  myConfig: {
    useCaching: true,
    language: "en"
  },
  // a very basic method
  saySomething: function() {
    console.log("Where in the world is Paul Irish today?");
  },
  // output a value based on the current config
  reportMyConfig: function() {
    console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled") );
  },
  // overriding the current config
  updateMyConfig: function(newConfig) {
    if(typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  }
};
// outputs: Where in the world is Paul Irish today?
myModule.saySomething();
// outputs: Caching is: enabled
myModule.reportMyConfig();
// outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});
// Outputs: caching is: disabled
myModule.reportMyConfig();

/*
  Module Pattern: originally defined as a way to proved both private and public encapsulation for classes in conventional software engineering.
  In Javascript the Module pattern is used to further emulate the concept of classes in such a way that we are able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope.
*/
var testModule = (function() {
  var counter = 0;
  return {
    incrementCounter: function() {
      return counter++;
    }, resetCounter: function() {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };
}());

// Usage:
// Increment our counter
testModule.incrementCounter();
// check the counter value and reset
testModule.resetCounter();

// We may want to define a template to make modules easier
var myNamespace = (function() {
  var myPrivateVar, myPrivateMethod;
  // A private counter variable
  myPrivateVar = 0;
  // A private function which logs args
  myPrivateMethod = function(foo) {
    console.log(foo);
  };

  return {
    // now a public variables
    myPublicVar: "foo",
    // A public function utilizing privates
    myPublicFunction: function(bar) {
      myPrivateVar++;
      // call our private method passing bar in
      myPrivateMethod(bar);
    }
  };
}());

// a shopping basket example
var basketModule = (function() {
  // privates
  var basket = [];
  function doSomethingPrivate() {
    //.....
  }
  function doSomethingElsePrivate() {
    //.....
  }
  // return an object exposed to public
  return {
    // add some items to our basket
    addItem: function(values) {
      basket.push(values);
    },
    getItemCount: function() {
      return basket.length;
    },
    // public alias to private function
    doSomething: doSomethingPrivate,
    // get the total value of items in the basket
    getTotal: function() {
      var q = this.getItemCount(),
          p = 0;
      while(q--) {
        p += basket[q].price;
      }
      return p;
    }
  }
}());
// taking it for a spin
basketModule.addItem({
  item: "bread",
  price: 0.5
});

basketModule.addItem({
  item: "butter",
  price: 0.3
});

// outputs 2
console.log(basketModule.getItemCount());
// outputs 0.8
console.log(basketModule.getTotal());
// however the following wont work
// outputs undefined
this is because the basket itself is not exposed
console.log(basketModule.basket);

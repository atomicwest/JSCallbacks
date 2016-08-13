Function.prototype.myBind = function(context) {
  // this.apply(this, [context]);
  // let b = this;

  // console.log(this);

  // function anonymous (cont) {
  //   // b.apply(cont, b.arguments);
  // }



  // let a =  (this, context) => { this.apply(context, ...this.arguments) };
  return () => { this.apply(context); };
    // return a
  // return anonymous;
};




class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"




function foo (treat) {
  console.log(this.name, treat);
}

const cat = {
  name: "Kitten"
};

const boundFoo = foo.bind(cat);
boundFoo("Catnip");

function koo (cat) {
  console.log("Hi");
  return () => {
    console.log(`Hi ${cat}`);
  };
}

foo("Cookie").bind(cat);


[1,2,3].push(1)
"[1,2,3]".push(1)

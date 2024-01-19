window.onload = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  document.querySelector("#mensaje1").innerHTML =
    who[Math.floor(Math.random() * who.length)];
  document.querySelector("#mensaje2").innerHTML =
    action[Math.floor(Math.random() * action.length)];
  document.querySelector("#mensaje3").innerHTML =
    what[Math.floor(Math.random() * what.length)];
  document.querySelector("#mensaje4").innerHTML =
    when[Math.floor(Math.random() * when.length)];

  // Imprimir en la consola los elementos seleccionados
  var who1 = document.querySelector("#mensaje1").innerHTML;
  var action1 = document.querySelector("#mensaje2").innerHTML;
  var what1 = document.querySelector("#mensaje3").innerHTML;
  var when1 = document.querySelector("#mensaje4").innerHTML;

  
  console.log(what);
  console.log(when);
};

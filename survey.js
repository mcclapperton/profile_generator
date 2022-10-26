const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// nest rl.questions within
// inside nested rl q - console.log(values of parameter of all rl.question)

rl.question("What's your name?", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite?", (answer4) => {
        rl.question(
          "What's your favourite thing to eat for that meal?",
          (answer5) => {
            rl.question("What's your favourite colour?", (answer6) => {
              rl.question("What animal is your favourite?", (answer7) => {
                console.log(
                  `${answer1} likes to listen to ${answer3} while ${answer2}. They like ${answer4} best and prefer to eat ${answer5}. ${answer1}'s favourite colour is ${answer6} and they like ${answer7}'`
                );
                rl.close();
              });
            });
          }
        );
      });
    });
  });
});

const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "{PATH} is required."],
      minlengh: [10, "{PATH} must be at least {MINLENGTH} characters."]

    },
    punchline: {
      type: String,
      required: [true, "{PATH} is required."],
      minlengh: [3, "{PATH} must be at least {MINLENGTH} characters."]

    },
  },
  {timestamps: true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;

//     setup: {
//       message: "Setup is required",
//       name: "ValidationError",
//       properties: {
//         message: "Setup is required",
//         type: "required",
//         path: "setup",
//         value: ""
//       },
//       kind: "required",
//       path: "setup",
//       value: ""

//     },

//     punchline: {
//       message: "Punchline is required",
//       name: "ValidationError",
//       properties: {
//         message: "Punchline is required",
//         type: "required",
//         path: "setup",
//         value: ""
//       },
//       kind: "required",
//       path: "setup",
//       value: ""

//   }
// )

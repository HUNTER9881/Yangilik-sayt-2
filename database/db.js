const { connect } = require("mongoose");
const { database } = require("../config/index");

connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFinfAndModify: false,
  useCreateIndex: true,
})
  .then(() => {
    console.log("Database is running");
  })
  .catch((error) => {
    console.log(error);
  });

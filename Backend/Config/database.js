const mongoose = require("mongoose");
const mongoURL =
  //BAGIAN ini ganti dengan mongodb://localhost:...
  "mongodb+srv://depdep:depdep@depdep.jlan2.mongodb.net/masker?retryWrites=true&w=majority";
mongoose.connect(mongoURL, (err) => {
  if (err) throw err;
  console.log("Berhasil connetct Database MONGODB");
});

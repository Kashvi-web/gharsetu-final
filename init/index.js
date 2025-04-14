if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/GharSetu";
const DB_URL = process.env.ATLASDB_URL;
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
  // await mongoose.connect(DB_URL);
}

let categoryAll = [
	"All",
	"PG",
	"Flat",
	"Villa",
	"Plot",
	"1BHK",
	"2BHK",
	"3BHK",
];


const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67e5906e06a65116e5d1b41a",
    price: obj.price * 25,
    category: [
      `${categoryAll[Math.floor(Math.random() * 22)]}`,
      `${categoryAll[Math.floor(Math.random() * 22)]}`,
    ],
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();

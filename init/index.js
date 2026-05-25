if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/finaldbs";

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: "6a032f621a84b7aa65139f59"  // ← replace with your real user _id
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

 // ← uncommented now
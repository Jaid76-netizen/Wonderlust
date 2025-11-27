const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;;

main()
    .then(() => {
        console.log("conected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: '67a82907752ffb5f8af0e9c3' }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();


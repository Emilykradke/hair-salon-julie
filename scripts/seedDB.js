const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/salon-DB"
)

const aboutSeed = [
    {
        title: "About",
        header: "",
        description: ""
    }
]

const contactSeed = [
    {
        phone: "(989) 598-3691",
        address: "511 S Mason Rd Ste 114",
        city: "Katy",
        state: "TX",
        zip: "77450",
        suite: "114",
        title: "Contact"
    }
]

const hoursSeed = [
    {
        day: "Monday",
        open: "9:15 am",
        close: "3:30 pm"
    },
    {
        day: "Tuesday",
        open: "9:15 am",
        close: "3:30 pm"
    },
    {
        day: "Wednesday",
        open: "Closed",
        close: ""
    },
    {
        day: "Thursday",
        open: "Closed",
        close: ""
    },
    {
        day: "Friday",
        open: "9:15 am",
        close: "12:00 pm"
    },
    {
        day: "Saturday",
        open: "9:15 am",
        close: "11:30 am"
    },
    {
        day: "Sunday",
        open: "10:00 am",
        close: "2:30 pm"
    }
]

const imagesSeed = [
    {
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/OYfb0JYLaH1xXGPNAmG4zA/o.jpg"
    },
    {
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/xO51-XZ_uZ4UD5UqJ8hR6w/o.jpg"
    },
    {
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/kNhKQz1JNxtBtR08mfuLQA/o.jpg"
    },
    {
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/_wzzbKX70g3jfQZOstWQUA/o.jpg"
    },
    {
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/IbZPChOlOJ4-asPS26gsoA/o.jpg"
    }
]

const servicesSeed = [
    {
        title: "",
        description: "",
        image: ""
    },
    {
        title: "",
        description: "",
        image: ""
    },
    {
        title: "",
        description: "",
        image: ""
    },
    {
        title: "",
        description: "",
        image: ""
    },
    {
        title: "",
        description: "",
        image: ""
    },
    {
        title: "",
        description: "",
        image: ""
    },
    {
        title: "",
        description: "",
        image: ""
    },
    {
        title: "",
        description: "",
        image: ""
    }
]

db.About
    .remove({})
    .then(() => db.About.collection.insertMany(aboutSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })

db.Contact
    .remove({})
    .then(() => db.Contact.collection.insertMany(contactSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })

db.Hours
    .remove({})
    .then(() => db.Hours.collection.insertMany(hoursSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })

db.Images
    .remove({})
    .then(() => db.Images.collection.insertMany(imagesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })

db.Services
    .remove({})
    .then(() => db.Services.collection.insertMany(servicesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!")
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    })



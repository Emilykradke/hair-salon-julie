const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/salon-DB"
)

const aboutSeed = [
    {
        title: "About",
        header: "",
        description: "", 
        image: ""
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
        active: false,
        open: "",
        close: ""
    },
    {
        day: "Thursday",
        active: false,
        open: "",
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
        title: "Toner Color",
        description: "Non-ammonia, deep conditioning, high shine pigment that enhances desired tones and minimizes undesirable ones",
        image: "https://i.ibb.co/rt6PFCV/toner.png"
    },
    {
        title: "Olaplex Treatment",
        description: "Protein treatment designed to strengthen hair and prevent additional damage",
        image: "https://i.ibb.co/wSTqdhd/olaplex.png"
    },
    {
        title: "Keratin Smoothing Treatment",
        description: "Curl reduction and anti-humidity treatment",
        image: "https://i.ibb.co/s92YFXd/keratin.png"
    },
    {
        title: "Balayage-Ombre",
        description: "Free-hand painted highlights, creating a soft and natural gradation of lightness towards the ends. Customized, natural-looking placement, allows for a softer grow out and longer periods between touch ups",
        image: "https://i.ibb.co/dBrY4mR/balayage.png"
    },
    {
        title: "Highlights and Lowlights",
        description: "A seamless blend of lighter and darker colors to create the desired effect",
        image: "https://i.ibb.co/D8HpMpF/highlight-lowlight.png"
    },
    {
        title: "Full Color",
        description: "Color from roots to ends",
        image: "https://i.ibb.co/rfBVJt1/full-color.png"
    },
    {
        title: "Root Touch-Up",
        description: "Color application on root area",
        image: "https://i.ibb.co/31t82TK/roots.png"
    }, 
    {
      title: "Special Occasion Updo",
      description: "Customized style according to occasion and personal style",
      image: "https://i.ibb.co/tKsc45y/updo.png"
    }, 
    {
      title: "Men's Haircut - 13 years and older",
      description: "Shampoo, haircut, and style",
      image: "https://i.ibb.co/2K9wrJN/mens.png"
    }, 
    {
      title: "Women's Haircut and Style - 13 years and older",
      description: "Shampoo, hair reshaping, and style",
      image: "https://i.ibb.co/R75b8pp/womens-haircut.png"
    }, 
    {
      title: "Children's Haircut - 1-12 years old",
      description: "Haircut and style",
      image: "https://i.ibb.co/Rv85mgS/childrensl.png"
    },
    {
      title: "Facial Waxing",
      description: "Safe hair removal with special skin-sensitive cream wax",
      image: "https://i.ibb.co/d5LLwJ5/wax.jpg"
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
    })



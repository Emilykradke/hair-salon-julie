const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/salon-DB"
)

const aboutSeed = [
    {
        title: "Julie's Story",
        header: "The greatest joy is celebrating the beauty within you",
        description: "Hair by Julie G, based in Katy, Texas provides numerous hair services such as haircutting, styling, hair extensions, hair coloring, and keratin and Olaplex treatments. Julie G also provides services for special occasions like weddings and parties.", 
        about: "Julie G is a perfectionist who does not stop with adequeate, but rather makes it her goal to ensure that you are thrilled with your look.",
        image: "https://i.ibb.co/1X1Nmt9/julieG.png", 
        name: "Julie G",
        jobDescription: "Owner & Master Hair Stylist and Colorist",
        specialty: "Hair Transformations"
    }
]

const contactSeed = [
    {
        phone: "(989) 598-3691",
        address: "511 S Mason Rd",
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
        hours: " 9:15a - 3:30p"
    },
    {
        day: "Tuesday",
        hours: "9:15a - 3:30p"
    },
    {
        day: "Wednesday",
        active: false,
        hours: "CLOSED"
    },
    {
        day: "Thursday",
        active: false,
        hours: "CLOSED"
    },
    {
        day: "Friday",
        hours: "9:15a - 12:00p"
    },
    {
        day: "Saturday",
        hours: "9:15a - 11:30a"
    },
    {
        day: "Sunday",
        hours: "10:00a - 2:30p"
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
        image: "https://i.ibb.co/mczQn4m/toner.png"
    },
    {
        title: "Olaplex Treatment",
        description: "Protein treatment designed to strengthen hair and prevent additional damage",
        image: "https://i.ibb.co/qyzqvVq/olaplex.png"
    },
    {
        title: "Keratin Smoothing Treatment",
        description: "Curl reduction and anti-humidity treatment",
        image: "https://i.ibb.co/TvWmMMB/keratin.png"
    },
    {
        title: "Balayage-Ombre",
        description: "Free-hand painted highlights, creating a soft and natural gradation of lightness towards the ends. Customized, natural-looking placement, allows for a softer grow out and longer periods between touch ups",
        image: "https://i.ibb.co/kJsYR3R/balayage.png"
    },
    {
        title: "Highlights and Lowlights",
        description: "A seamless blend of lighter and darker colors to create the desired effect",
        image: "https://i.ibb.co/gmn6xkK/highlight-lowlight.png"
    },
    {
        title: "Full Color",
        description: "Color from roots to ends",
        image: "https://i.ibb.co/SPPK1Pt/full-color.png"
    },
    {
        title: "Root Touch-Up",
        description: "Color application on root area",
        image: "https://i.ibb.co/mcfPxF5/roots.png"
    }, 
    {
      title: "Special Occasion Updo",
      description: "Customized style according to occasion and personal style",
      image: "https://i.ibb.co/1fSCjcq/updo.png"
    }, 
    {
      title: "Men's Haircut - 13 years and older",
      description: "Shampoo, haircut, and style",
      image: "https://i.ibb.co/jJHqvp2/mens.png"
    }, 
    {
      title: "Women's Haircut and Style - 13 years and older",
      description: "Shampoo, hair reshaping, and style",
      image: "https://i.ibb.co/sgShDRz/womens-haircut.png"
    }, 
    {
      title: "Children's Haircut - 1-12 years old",
      description: "Haircut and style",
      image: "https://i.ibb.co/0D3jStF/childrensl.png"
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



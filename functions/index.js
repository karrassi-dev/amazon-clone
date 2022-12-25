const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe") (process.env.STRIPE_SECRET_KEY);
const { app } = require("firebase-admin");

// App Config
const ap = express()

// MIddlewares

app.use(cors({origin:true}))
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})


// Listen command
exports.api = functions.https.onRequest(app);
const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const Stripe = require("stripe")("sk_test_51QHUNWLrQuCWyQsojC3D9Bp3pnA2JBKLFOdLLjrDwQtDZ1i7gsbmII2lJmMCtt7K36nPIw31yUzYnyg7f5CMP1nE00YKDbjCB9");
// GET all workouts
router.get("/", getWorkouts);

// POST a new workouts
router.post("/", createWorkout);

// GET a single workout
router.get("/:id", getWorkout);

// DELETE a single workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

router.post("/create-checkout-session", async (req, res) => {
  const { product } = req.body;
  const products = [];
  products.push(product)
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      unit_amount: Math.round(product.price * 100/80), // Stripe requires prices in cents
      product_data: {
        name: product.name,
      },
    },
    quantity: 1, // Moved quantity here, outside of price_data
  }));
  

  const session = await Stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ id: session.id });
});

module.exports = router;

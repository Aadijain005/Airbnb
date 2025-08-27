import express from "express";
import {
  AddToFavourites,
  GetUserFavourites,
  RemoveFromFavourites,
  SignUp,
  SignIn,
  BookProperty,
  GetBookedProperty,
} from "../controllers/user.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/addToFavourites", [verifyToken], AddToFavourites);
router.post("/getFavourites", [verifyToken], GetUserFavourites);
router.post("/removeFavourites", [verifyToken], RemoveFromFavourites);
router.post("/booking", [verifyToken], BookProperty);
router.post("/getBooking", [verifyToken], GetBookedProperty);

export default router;

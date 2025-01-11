import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://neotangohelsinki:URFWLhmfZ31hEEx6@cluster0.phoh6.mongodb.net/blog-app"
  );

  console.log("DB connection established");
};

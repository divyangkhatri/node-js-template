import mongoose from "mongoose";
mongoose
    .connect(
        "mongodb://localhost:27017/test?retryWrites=true&w=majority",
    )
    .then(() => {
        console.log("Connection Sucessfully");
    })
    .catch(error => {
        console.log("No connection", error);
    });

import React, { useState } from "react";
import Footer from "../components/Footer";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <>
      <section>
        <div className="container sign-up-section">
          <div className="row">
            <div className="col-md-5">
              <div
                style={{
                  marginTop: "3rem",
                  color: "#0c6a52",
                  fontWeight: "bold",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                >
                  SignUp To Join Our List Of Riders
                </p>

                <img src="./images/corier.jpg" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-7">
              <div
                style={{
                  marginTop: "4rem",
                }}
              >
                <form className="form-signup" onSubmit={handleSubmit(onSubmit)}>
                  <div className="driver-info-section">
                    <TextField
                      className="input"
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                      {...register("username", {
                        required: true,
                        maxLength: 20,
                      })}
                      error={
                        errors?.username?.type === "required" ||
                        errors?.username?.type === "maxLength"
                      }
                      helperText={
                        errors?.username?.type === "required"
                          ? "This field is required"
                          : errors?.username?.type === "maxLength"
                          ? "Max. characters is 20"
                          : ""
                      }
                    />

                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                      })}
                      error={
                        errors?.email?.type === "required" ||
                        errors?.email?.type === "pattern"
                      }
                      helperText={
                        errors?.email?.type === "required"
                          ? "This field is required"
                          : errors?.email?.type === "pattern"
                          ? "Enter valid email"
                          : ""
                      }
                    />
                  </div>

                  <div className="driver-address-section">
                    <TextField
                      className="input"
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      {...register("phoneNumber", {
                        required: true,
                      })}
                      error={errors?.phoneNumber?.type === "required"}
                      helperText={
                        errors?.phoneNumber?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />

                    <TextField
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      {...register("address", {
                        required: true,
                      })}
                      error={errors?.address?.type === "required"}
                      helperText={
                        errors?.address?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>

                  <div className="driver-family-section">
                    <InputLabel id="demo-simple-select-label">
                      Select gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      {...register("gender", {
                        required: true,
                      })}
                      error={errors?.gender?.type === "required"}
                      helperText={
                        errors?.gender?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem disabled value="">
                        <em>Select gender</em>
                      </MenuItem>
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>

                    <InputLabel id="demo-simple-select-label">
                      Marital Status
                    </InputLabel>
                    <Select
                    className="selectclass2"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      {...register("maritalStatus", {
                        required: true,
                      })}
                      error={errors?.maritalStatus?.type === "required"}
                      helperText={
                        errors?.maritalStatus?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    >
                      <MenuItem value={"married"}>Married</MenuItem>
                      <MenuItem value={"single"}>Single</MenuItem>
                      <MenuItem value={"divorced"}>Divorced</MenuItem>
                    </Select>
                  </div>

                  <div className="driver-vehicle-section">
                    <TextField
                      className="input one"
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      {...register("state", {
                        required: true,
                      })}
                      error={errors?.state?.type === "required"}
                      helperText={
                        errors?.state?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />

                    <TextField
                    className="one"
                      id="outlined-basic"
                      label="Vehicle Type"
                      variant="outlined"
                      {...register("vehicleType", {
                        required: true,
                      })}
                      error={errors?.vehicleType?.type === "required"}
                      helperText={
                        errors?.vehicleType?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />

                    <TextField
                      className="input"
                      id="outlined-basic"
                      label="Licence"
                      variant="outlined"
                      {...register("licence", {
                        required: true,
                      })}
                      error={errors?.licence?.type === "required"}
                      helperText={
                        errors?.licence?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />

                    <TextField
                      id="outlined-basic"
                      label="Nipost"
                      variant="outlined"
                      {...register("nipost", {
                        required: true,
                      })}
                      error={errors?.nipost?.type === "required"}
                      helperText={
                        errors?.nipost?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>

                  <div className="driver-info-section">
                    <TextField
                      className="input"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      {...register("password", {
                        required: true,
                      })}
                      error={errors?.password?.type === "required"}
                      helperText={
                        errors?.password?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />

                    <TextField
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                      {...register("conPassword", {
                        required: true,
                      })}
                      error={errors?.conPassword?.type === "required"}
                      helperText={
                        errors?.conPassword?.type === "required"
                          ? "This field is required"
                          : ""
                      }
                    />
                  </div>

                  <div className="driver-signup-btn">
                    <button>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SignUp;

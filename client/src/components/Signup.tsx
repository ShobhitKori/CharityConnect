"use client";
import React from "react";
import { useState } from "react";
// import Image from "next/image"
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { Checkbox } from "./ui/checkbox.tsx";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card.tsx";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./utils";
import { DynamicFavicon } from "./DynamicFavicon.tsx";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;

    console.log(name, value);
    setSignupInfo(copySignupInfo);
    console.log(signupInfo);
  };
  // const [error, handleError] = useState("");
  // const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(signupInfo);
    try {
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <DynamicFavicon />
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="space-y-1">
          <Link className="flex items-center justify-center" to="/">
            <img
              src="./ngoLogo.png"
              alt="NGO Logo"
              className="rounded-full"
              width={100}
              height={100}
            />
          </Link>
          <CardTitle className="text-2xl font-bold text-center">
            Join Our Cause
          </CardTitle>
          <CardDescription className="text-center">
            Sign up to make a difference in the world 🌍
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                name="name"
                onChange={handleChange}
                value={signupInfo.name}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                onChange={handleChange}
                value={signupInfo.email}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone"  placeholder="Enter your phone" required />
            </div> */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={signupInfo.password}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the terms and conditions
              </label>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100"
              type="submit"
            >
              Sign Up
            </Button>
            <ToastContainer />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" size="sm">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                  />
                </svg>
              </Button>
              <Button variant="outline" size="sm">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
              <Button variant="outline" size="sm">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-semibold text-purple-600 hover:underline"
              >
                Sign in
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

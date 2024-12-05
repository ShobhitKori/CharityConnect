"use client";
import React, { useState } from "react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { Checkbox } from "./ui/checkbox.tsx";
import { useNavigate } from "react-router-dom";
import ngoLogo from "../components/ngoLogo.png";  
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select.tsx";
import { EyeIcon, EyeOffIcon, Upload } from "lucide-react";
import { handleError, handleSuccess } from "./utils.js";
import { DynamicFavicon } from "./DynamicFavicon.tsx";
import Alert from '@mui/material/Alert';


export default function VolunteerApply() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSuccess = () => {
    setSuccess(true);
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    collegename: "",
    collegeidphoto: "",
    abcid: "",
    description: "",
    workinghour: "",
    password: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      handleError('Please upload a college ID photo.');
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData]);
    }
    data.append('collegeidphoto', file);

    try {
      const response = await fetch('http://localhost:8080/api/volunteering/add', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      handleSuccess('Form submitted successfully!');
      handleError(null);
      setFormData({
        name: '',
        phone: '',
        address: '',
        email: '',
        collegename: '',
        abcid: '',
        collegeidphoto: "",
        description: '',
        workinghour: '',
        password: "",
      });
      setFile(null);
    } catch (error: any) {
      handleError(error.message);
      handleSuccess("Voluteer applied sucessfully");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone"
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your Address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="collegename">College Name</Label>
              <Input
                name="collegename"
                value={formData.collegename}
                onChange={handleInputChange}
                placeholder="Enter your College"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idPhoto">College ID Photo</Label>
              <div className="flex flex-col items-center gap-4">
                {formData.collegeidphoto && (
                  <img
                    src={formData.collegeidphoto}
                    alt="ID preview"
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                )}
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="collegeidphoto"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload image
                      </p>
                    </div>
                    <Input
                      id="collegeidphoto"
                      name="collegeidphoto"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="abcid">ABC ID</Label>
              <Input
                name="abcid"
                value={formData.abcid}
                onChange={handleInputChange}
                placeholder="Enter ABC ID"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteerReason">Reason for Volunteering</Label>
              <Select
                name="volunteerReason"
                value={formData.description}  // Binding value here
                onValueChange={(value) => setFormData({ ...formData, description: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="college">College requirement</SelectItem>
                  <SelectItem value="personal">Own free will</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workinghour">Preferred Volunteering Time</Label>
              <Input
                name="workinghour"
                type="text"
                className="w-full"
                value={formData.workinghour}
                onChange={handleInputChange}
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <DynamicFavicon />
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <img src={ngoLogo} alt="NGO Logo" width={100} height={100} />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Join Our Cause
          </CardTitle>
          <CardDescription className="text-center">
            Sign up as a Volunteer make a difference in the world 🌍
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {renderStep()}
            <div className="flex justify-between">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </Button>
              )}
              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </form>
        </CardContent>
        {success && <Alert className="mt-10 mb-10 ml-7 mr-7 pt-10 pb-10 pl-7 pr-7" severity="success">Successfully Applied for Volunteering</Alert>}
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const services = [
  { name: "Basic Tune-Up", price: 50 },
  { name: "Comprehensive Service", price: 100 },
  { name: "Brake Adjustment", price: 30 },
  { name: "Gear Adjustment", price: 40 },
  { name: "Wheel Truing", price: 60 },
];

export default function ServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    address: "",
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const sendVerificationCode = async () => {
    try {
      const response = await fetch("/api/verify-phone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: formData.phoneNumber }),
      });
      const data = await response.json();
      if (data.success) {
        setIsCodeSent(true);
        toast({
          title: "Verification code sent",
          description: "Please check your phone for the verification code.",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send verification code. Please try again.",
        variant: "destructive",
      });
    }
  };

  const verifyCode = async () => {
    setIsVerifying(true);
    try {
      const response = await fetch("/api/check-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          code: verificationCode,
        }),
      });
      const data = await response.json();
      if (data.success && data.status === "approved") {
        setIsVerified(true);
        toast({
          title: "Phone verified",
          description: "Your phone number has been successfully verified.",
        });
      } else {
        throw new Error("Invalid verification code");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      toast({
        title: "Phone not verified",
        description: "Please verify your phone number before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "+1234567890", // Cambiar numero
          body: `New service booking:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phoneNumber}
Service: ${formData.service}
Address: ${formData.address}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: "Service booked",
          description: "Your service has been successfully booked.",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book service. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Bike Service Booking</CardTitle>
          <CardDescription>
            Book your bike service and verify your phone number
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <div className="flex space-x-2">
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  onChange={handleChange}
                  disabled={isVerified}
                />
                <Button
                  type="button"
                  onClick={sendVerificationCode}
                  disabled={isVerified}
                >
                  {isVerified
                    ? "Verified"
                    : isCodeSent
                      ? "Resend Code"
                      : "Send Code"}
                </Button>
              </div>
            </div>
            {isCodeSent && !isVerified && (
              <div className="space-y-2">
                <Label htmlFor="verificationCode">Verification Code</Label>
                <div className="flex space-x-2">
                  <Input
                    id="verificationCode"
                    type="text"
                    placeholder="Enter code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  <Button
                    type="button"
                    onClick={verifyCode}
                    disabled={isVerifying}
                  >
                    {isVerifying ? "Verifying..." : "Verify Code"}
                  </Button>
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Select name="service" onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.name} value={service.name}>
                      {service.name} - ${service.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                name="address"
                required
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full" disabled={!isVerified}>
              Book Service
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

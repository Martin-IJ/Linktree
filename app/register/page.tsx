// pages/register.js
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useRouter } from "next/navigation";
import { IoIosLock } from "react-icons/io";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import Input from "../components/FormInput/Input";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmationError, setConfirmationError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setEmailError("");
    setPasswordError("");
    setConfirmationError("");

    if (!email) {
      setEmailError("Can't be empty");
      return;
    }

    if (password !== confirmation) {
      setConfirmationError("Passwords don't match");
      return;
    }

    if (!password) {
      setPasswordError("Please check again");
      return;
    }

    try {
      await createUserWithEmailAndPassword(getAuth(app), email, password);
      router.push("/login");
    } catch (e) {
      const errorMessage = (e as Error).message;
      if (errorMessage.includes("email")) {
        setEmailError("Can't be empty");
      } else if (errorMessage.includes("password")) {
        setPasswordError("Please check again");
      } else {
        setEmailError(errorMessage);
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mb-10">
        <Logo />
      </div>
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div>
            <h1 className="text-xl font-bold mb-5 tracking-tight md:text-2xl">
              Create account
            </h1>
            <p>Let’s get you started sharing your links!</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="e.g. alex@email.com"
              icon={<PiEnvelopeSimpleFill className="text-lg" />}
              error={emailError}
              required
            />
            <Input
              label="Create password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="At least 8 characters"
              icon={<IoIosLock className="text-lg" />}
              error={passwordError}
              required
            />
            <Input
              label="Confirm password"
              type="password"
              name="confirm-password"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              id="confirm-password"
              placeholder="At least 8 characters"
              icon={<IoIosLock className="text-lg" />}
              error={confirmationError}
              required
            />
            <p className="p">Password must contain at least 8 characters</p>
            <Button type="submit" variant="primary" className="w-full">
              Create new account
            </Button>
            <p className="text-sm font-light text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-default hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

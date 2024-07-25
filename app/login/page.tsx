"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { IoIosLock } from "react-icons/io";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import Input from "../components/FormInput/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Can't be empty");
      return;
    }

    if (!password) {
      setPasswordError("Please check again");
      return;
    }

    try {
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      router.push("/");
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
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Login
          </h1>
          <p>Add your details below to get back into the app</p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <Input
              label="Email address"
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
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter your password"
              icon={<IoIosLock className="text-lg" />}
              error={passwordError}
              required
            />

            <Button type="submit" variant="primary" className="w-full">
              Login
            </Button>
            <p className="text-sm font-light text-gray-500 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-default hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

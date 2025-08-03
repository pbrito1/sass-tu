'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export function AuthForm() {
    const form = useForm()

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            console.log("Form submitted with data:", data)
            await signIn('email', {
                email: data.email,
                redirect: false,
            })
            toast("We have sent you a sign-in link. Please check your inbox.")

        } catch (error) {
            toast("We have sent you a sign-in link. Please check your inbox.")
            console.error("Error during sign-in:", error);
        }
    })

    return (
    <div className="mx-auto max-w-sm space-y-8">
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
                Login
            </h1>
            <p className="text-gray-500 dark:text-gray-500">Enter your email below to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="you@example.com" required type="email" {...form.register("email")} />
            </div>
            <Button className="w-full" type="submit">Continue</Button>
        </form>
    </div>
  );
}
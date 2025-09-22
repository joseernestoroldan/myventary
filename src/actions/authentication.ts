"use server";

import { registerSchema } from "@/schemas";
import { signIn } from "@/server/auth";
import { db } from "@/server/db";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { ZodError } from "zod";

/**
 * Acción para iniciar sesión con Google
 */
export async function signInWithGoogle() {
  await signIn("google", { callbackUrl: "/dashboard" });
}

/**
 * Acción para iniciar sesión con credenciales (email/password)
 */
export async function signInWithCredentials(
  prevState: { messages: string[]; success: boolean } | null,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    return { messages: ["Login successful"], success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { messages: ["Invalid email or password"], success: false };
        default:
          return { messages: ["Something went wrong"], success: false };
      }
    }
    throw error;
  }
}

export async function createAccount(
  prevState: { messages: string[]; success: boolean } | null,
  formData: FormData,
) {
  try {
    const { email, name, password } = await registerSchema.parse({
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    });
    console.log(name, email, password);
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return { messages: ["Email already exists"], success: false };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    return { messages: ["Account created successfully"], success: true };
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      const messages = error.errors.map((err) => err.message);
      return { messages, success: false };
    }
    return {
      messages: ["An unexpected error occurred. Please try again later."],
      success: false,
    };
  }
}

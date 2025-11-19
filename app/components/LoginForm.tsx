"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormField from "./FormField";

type Errors = {
  username?: string;
  password?: string;
};

const styles = {
  card: `
    bg-[linear-gradient(180deg,#D0E2F8_0%,#8AB8F0_100%)]
    rounded-[28px]
    shadow-md
    px-8 py-8
    w-[clamp(286px,60vw,640px)]
    flex flex-col gap-6
  `,
  title: `
    text-center
    text-[clamp(45px,6vw,96px)]
  `,
  buttonsRow: `
    flex flex-col pt-[clamp(25px,4vw,40px)] w-full
  `,
  submitButton: `
    rounded-[13px]
    px-6
    h-[41px] md:h-[48px]
    text-[clamp(18px,1.8vw,24px)]
    bg-[#497AB6]/40
    hover:bg-[#497AB6]
    outline-none
    border-none
  `,
};

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!username.trim()) newErrors.username = "Field is required";
    if (!password.trim()) newErrors.password = "Field is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.card} noValidate>
      <h1 className={styles.title}>LOGIN</h1>

      <FormField
        label="Username"
        value={username}
        error={errors.username}
        onChange={setUsername}
      />

      <FormField
        label="Password"
        type="password"
        value={password}
        error={errors.password}
        onChange={setPassword}
      />

      <div className={styles.buttonsRow}>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </div>
    </form>
  );
}

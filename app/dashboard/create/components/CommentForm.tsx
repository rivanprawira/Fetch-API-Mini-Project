"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

type Errors = {
  name?: string;
  email?: string;
  body?: string;
};

const styles = {
  card: `
    bg-[#F3E6C9]
    rounded-[19px]
    shadow-md
    px-6 py-6
    flex flex-col gap-6
  `,
  field: `
    flex flex-col gap-2
  `,
  headerRow: `
    flex justify-between items-center
  `,
  label: `
    text-[clamp(18px,2vw,24px)]
  `,
  error: `
    text-[clamp(12px,1.6vw,16px)]
    text-red-600
  `,
  input: `
    w-full
    rounded-[10px]
    bg-[#FFFFFF]/60
    px-4
    h-[41px] md:h-[50px]
    text-[clamp(16px,2vw,20px)]
    outline-none
    ring-0
    border border-transparent
    focus:border-black/30
  `,
  textarea: `
    w-full
    rounded-[10px]
    bg-[#FFFFFF]/60
    px-4 py-2
    min-h-[120px] md:min-h-[150px]
    text-[clamp(16px,2vw,20px)]
    text-black
    outline-none
    ring-0
    border border-transparent
    focus:border-black/30
    resize-none
  `,
  buttonsRow: `
    flex justify-end gap-3 mt-2
  `,
  buttonBase: `
    rounded-[10px]
    px-5
    h-[41px] md:h-[48px]
    text-[clamp(14px,1.8vw,18px)]
    outline-none
    border-none
    ring-0
    transition
  `,
  cancelButton: `
    bg-[#CCD0CC]/40
    hover:bg-[#CCD0CC]
  `,
  submitButton: `
    bg-[#22F402]/40
    hover:bg-[#22F402]
  `,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
};

function TextField({
  id,
  label,
  value,
  error,
  type = "text",
  onChange,
}: TextFieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.headerRow}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {error && <p className={styles.error}>*{error}</p>}
      </div>
      <input
        id={id}
        type={type}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function TextAreaField({
  id,
  label,
  value,
  error,
  onChange,
}: TextAreaFieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.headerRow}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {error && <p className={styles.error}>*{error}</p>}
      </div>
      <textarea
        id={id}
        className={styles.textarea}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function CommentForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!name.trim()) newErrors.name = "Field is required";
    if (!email.trim()) {
      newErrors.email = "Field is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Invalid email address";
    }
    if (!body.trim()) newErrors.body = "Field is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    router.push("/dashboard");
  };

  const handleCancel = () => {
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.card} noValidate>
      <TextField
        id="name"
        label="Name"
        value={name}
        error={errors.name}
        onChange={setName}
      />
      <TextField
        id="email"
        label="Email"
        value={email}
        error={errors.email}
        type="email"
        onChange={setEmail}
      />
      <TextAreaField
        id="body"
        label="Comment"
        value={body}
        error={errors.body}
        onChange={setBody}
      />

      <div className={styles.buttonsRow}>
        <button
          type="button"
          onClick={handleCancel}
          className={`${styles.buttonBase} ${styles.cancelButton}`}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`${styles.buttonBase} ${styles.submitButton}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

const styles = {
  wrapper: `
    flex flex-col gap-2
  `,
  headerRow: `
    flex justify-between items-center
  `,
  error: `
    text-[clamp(14px,1.6vw,18px)]
    text-red-600
  `,
  label: `
    text-[clamp(18px,2vw,24px)]
  `,
  input: `
    w-full
    rounded-[13px]
    bg-[#71AFF9]
    px-4
    h-[56px] md:h-[95px]
    text-[clamp(20px,2vw,26px)]
    outline-none
    border-2 border-transparent
    focus:border-[#A855F7]
  `,
};

export default function FormField({
  label,
  type = "text",
  value,
  error,
  onChange,
}: FormFieldProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <label className={styles.label}>{label}</label>

        {error && <p className={styles.error}>*{error}</p>}
      </div>

      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

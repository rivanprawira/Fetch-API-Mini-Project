const styles = {
  input: `
    w-full
    rounded-[10px]
    bg-[#F3E6C9]/60
    px-4 
    h-[clamp(41px,4vw,50px)]
    text-[clamp(18px,4vw,24px)]
    placeholder:text-black/40
    outline-none
    ring-0
    focus:ring-2
    focus:ring-[#d4c7ab]
    border-none
  `,
  gridWrapper: `
    grid
    grid-cols-1
    md:grid-cols-[1.5fr_1.5fr_2fr_1fr]
    gap-3
  `,
  button: `
    w-full
    rounded-[10px]
    bg-[#F3E6C9]/60
    h-[clamp(41px,4vw,50px)]
    text-[clamp(18px,4vw,24px)]
    outline-none
    ring-0
    border-none
    hover:bg-[#F3E6C9]
  `,
  clearIcon: `
    absolute right-3 top-1/2 -translate-y-1/2
    text-black/50
    hover:text-black
    cursor-pointer
    text-[clamp(20px,3vw,26px)]
  `,
  fieldWrapper: `
    relative
  `,
};

type SearchBarProps = {
  name: string;
  email: string;
  comment: string;
  onChangeName: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangeComment: (value: string) => void;
  onSearch: () => void;
  onClear?: () => void;
};

type InputWithClearProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function InputWithClear({ placeholder, value, onChange }: InputWithClearProps) {
  return (
    <div className={styles.fieldWrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value !== "" && (
        <span
          className={`${styles.clearIcon} material-symbols-outlined`}
          onClick={() => onChange("")}
        >
          cancel
        </span>
      )}
    </div>
  );
}

export default function SearchBar({
  name,
  email,
  comment,
  onChangeName,
  onChangeEmail,
  onChangeComment,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="w-full">
      <div className={styles.gridWrapper}>
        <InputWithClear
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        />
        <InputWithClear
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        />
        <InputWithClear
          placeholder="Comment"
          value={comment}
          onChange={onChangeComment}
        />

        <div className="flex flex-col gap-2">
          <button type="button" className={styles.button} onClick={onSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

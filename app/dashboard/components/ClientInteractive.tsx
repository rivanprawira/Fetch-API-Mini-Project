"use client";

import { useMemo, useState } from "react";
import type { Comment } from "../fetchData";
import SearchBar from "./SearchBar";
import CommentsTable from "./CommentsTable";
import CreateButton from "./CreateButton";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});

const headerTextClass = `
  mt-2
  text-[clamp(40px,8vw,60px)]
  text-center
`;

type DashboardClientProps = {
  initialComments: Comment[];
};

export default function DashboardClient({
  initialComments,
}: DashboardClientProps) {
  const [comments, setComments] = useState(initialComments);

  const [nameQuery, setNameQuery] = useState("");
  const [emailQuery, setEmailQuery] = useState("");
  const [bodyQuery, setBodyQuery] = useState("");

  const [appliedName, setAppliedName] = useState("");
  const [appliedEmail, setAppliedEmail] = useState("");
  const [appliedBody, setAppliedBody] = useState("");

  const handleSearch = () => {
    setAppliedName(nameQuery);
    setAppliedEmail(emailQuery);
    setAppliedBody(bodyQuery);
  };

  const handleClear = () => {
    setNameQuery("");
    setEmailQuery("");
    setBodyQuery("");
    setAppliedName("");
    setAppliedEmail("");
    setAppliedBody("");
  };

  const filteredComments = useMemo(() => {
    return comments.filter((c) => {
      const nameMatch = appliedName
        ? c.name.toLowerCase().includes(appliedName.toLowerCase())
        : true;

      const emailMatch = appliedEmail
        ? c.email.toLowerCase().includes(appliedEmail.toLowerCase())
        : true;

      const bodyMatch = appliedBody
        ? c.body.toLowerCase().includes(appliedBody.toLowerCase())
        : true;

      return nameMatch && emailMatch && bodyMatch;
    });
  }, [comments, appliedName, appliedEmail, appliedBody]);

  const handleDelete = (id: number) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      <div className={`${headerTextClass} ${poppins.className}`}>
        Comment Dashboard
      </div>
      <SearchBar
        name={nameQuery}
        email={emailQuery}
        comment={bodyQuery}
        onChangeName={setNameQuery}
        onChangeEmail={setEmailQuery}
        onChangeComment={setBodyQuery}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <CommentsTable data={filteredComments} onDelete={handleDelete} />
      <CreateButton />
    </section>
  );
}

import React from "react";

export default function StudentDetails({ student = {} }) {
  return (
    <div className="StudentDetails">
      <div>{student.name}</div>
      <div>{student.hobby}</div>
      <div>{student.aboutMe}</div>
    </div>
  );
}

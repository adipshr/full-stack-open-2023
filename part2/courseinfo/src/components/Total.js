import React from "react";

export default function Total({ course }) {
  const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0);

  return (
    <>
      <strong>total of {total} exercises</strong>
    </>
  );
}

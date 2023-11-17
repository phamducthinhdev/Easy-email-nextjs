"use client"
import React from "react";
import dynamic from "next/dynamic";

const EditorComponent = dynamic(
  () =>
    import("./editor/index").then(
      (lib) => lib.default
    ) as any,
  { ssr: false }
);

export default function EmailTemplateForm() {
  return (
    <>
      <EditorComponent />
    </>
  );
}
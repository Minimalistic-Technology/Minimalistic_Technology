"use client";
import dynamic from "next/dynamic";

const GetStartedForm = dynamic(() => import("./GetStretdForm"), { ssr: false });

export default function ClientOnlyGetStartedForm() {
  return <GetStartedForm />;
}

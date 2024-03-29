/**
 * @file This file represents the registration page.
 * @returns {JSX.Element} The registration page
 */
"use client";

import RegistrationForm from "@/components/form/RegistrationForm";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <RegistrationForm />
    </div>
  );
}

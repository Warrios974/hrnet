import RegistrationForm from "@/components/form/RegistrationForm"
import Head from "next/head"

export default function Page({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    return (
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <RegistrationForm />
        </div>
            
    )
  }
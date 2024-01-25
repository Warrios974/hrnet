import ListEmployees from "@/components/ListEmployees";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl p-5 lg:px-8">
      <div className="bg-white p-5 rounded-md flex flex-wrap gap-3 lg:items-center justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Employees
          </h2>
        </div>
        <div className="flex gap-1">
          <span className="sm:ml-3">
            <Link
              href={"/employees"}
              type="button"
              className="btn btn-btn-tertiary"
            >
              <svg
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Voir
            </Link>
          </span>
          <span className="sm:ml-3">
            <Link
              href={"/registration"}
              type="button"
              className="btn btn-primary"
            >
              <svg
                className="mr-1.5 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add
            </Link>
          </span>
        </div>
      </div>
      <ListEmployees />
    </main>
  );
}

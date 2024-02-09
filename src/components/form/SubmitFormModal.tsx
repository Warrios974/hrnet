/**
 * Modal component to show a message when a new employee is created
 * @param isOpen - boolean to show or hide the modal
 * @param setIsOpen - function to set the state of the modal
 * @returns React Modal component
 */
import Link from "next/link";
import ReactModal from "react-modal";

type SubmitFormModalType = {
  isOpen: boolean;
  setIsOpen: (element: boolean) => void;
};

ReactModal.setAppElement("#root");

export default function SubmitFormModal({
  isOpen,
  setIsOpen,
}: SubmitFormModalType) {
  const message = "Employee Created !";

  return (
    <ReactModal
      isOpen={isOpen}
      className="relative flex flex-col justify-between transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      role="dialog"
      overlayClassName="fixed inset-0 z-10 w-screen h-full overflow-y-auto flex justify-center items-center bg-slate-400 bg-opacity-50"
      bodyOpenClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      shouldCloseOnEsc={true}
    >
      <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={() => setIsOpen(false)}
          className="inline-flex bg-transparent bg-slate-100 border rounded-md border-gray-300 px-2 py-1 text-sm font-semibold text-black shadow-sm sm:ml-3 sm:w-auto"
        >
          esc
        </button>
      </div>
      <div className="flex flex-col items-center bg-white px-4 sm:p-6 sm:pb-4">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 my-4 sm:mx-0 sm:h-10 sm:w-10">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </div>
        <div className="my-4 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3
            className="text-base font-semibold leading-6 text-gray-900"
            id="modal-title"
          >
            {message}
          </h3>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <Link
          href={"/employees"}
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Go to employees
        </Link>
      </div>
    </ReactModal>
  );
}

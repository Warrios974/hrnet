/**
 * Formulaire d'inscription pour ajouter un nouvel employé
 * @returns Composant RegistrationForm
 */

"use client";

import statesData from "@/data/states.json";
import { User, useEmployeeStore } from "@/store/UsersStore";
import { useEffect, useState } from "react";
import CustomSelect, { SelectOptions } from "./CustomSelect";
import DatePickerForm from "./DatePickerForm";
import SubmitFormModal from "./SubmitFormModal";

const INITIAL_FORM_DATA = {
  id: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  streetAddress: "",
  cityAddress: "",
  stateAddress: "",
  zipCodeAddress: "",
  department: "",
};

export default function RegistrationForm() {
  // Récupérer les Etats depuis le fichier JSON
  const states = statesData.states;
  const { addUser } = useEmployeeStore();

  const [displayModal, setDisplayModal] = useState(false);
  const [setUp, setSetUp] = useState(false);

  const [formData, setFormData] = useState<User>({
    id: "0",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "2023-01-01",
    startDate: "2023-01-01",
    streetAddress: "123 Main St",
    cityAddress: "Anytown",
    stateAddress: "Alabama",
    zipCodeAddress: "12345",
    department: "Sales",
  });

  // Options du Select
  const optionsState = states.map((state) => ({ value: state, label: state }));

  const optionsDepartment = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Humain Resources", label: "Humain Resources" },
    { value: "Legal", label: "Legal" },
  ];

  useEffect(() => {
    setSetUp(true);
  }, []);

  // Gérer le changement deq inputs
  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // La fonction addUser du store pour ajouter l'utilisateur
    addUser(formData);

    // Réinitialisez le formulaire
    setFormData(INITIAL_FORM_DATA);

    setDisplayModal(true);
  };

  if (setUp)
    return (
      <div className="p-8 flex flex-col justify-center items-center">
        <form
          className="w-96 bg-white shadow-md rounded px-8 py-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name <span className="text-red-500 px-1">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
              pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$"
              title="Seuls les lettres et espaces sont autorisés, y compris les caractères accentués"
              value={formData.firstName}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name <span className="text-red-500 px-1">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
              pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$"
              title="Seuls les lettres et espaces sont autorisés, y compris les caractères accentués"
              value={formData.lastName}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date of Birth <span className="text-red-500 px-1">*</span>
            </label>
            <DatePickerForm
              id="dateOfBirth"
              handleInputChange={handleInputChange}
              valueProps={formData.dateOfBirth}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="startDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Start Date <span className="text-red-500 px-1">*</span>
            </label>
            <DatePickerForm
              id="startDate"
              handleInputChange={handleInputChange}
              valueProps={formData.startDate}
            />
          </div>
          <fieldset className="border border-gray-300 p-4 rounded mt-4 mb-4">
            <legend className="text-lg text-gray-500 font-bold px-2">
              {" "}
              Address{" "}
            </legend>
            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Street <span className="text-red-500 px-1">*</span>
              </label>
              <input
                type="streetAddress"
                id="street"
                name="streetAddress"
                className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
                pattern="^[a-zA-Z0-9\s]+$"
                title="Only letters, numbers, and spaces are allowed"
                value={formData.streetAddress}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cityAddress"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                City <span className="text-red-500 px-1">*</span>
              </label>
              <input
                type="text"
                id="cityAddress"
                name="cityAddress"
                className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
                pattern="^[a-zA-Z\s]+$"
                title="Only letters and spaces are allowed"
                value={formData.cityAddress}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="stateAddress"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                State <span className="text-red-500 px-1">*</span>
              </label>
              <CustomSelect
                id="stateAddress"
                name="stateAddress"
                options={optionsState}
                onChange={(data) => {
                  if (data)
                    handleInputChange(
                      "stateAddress",
                      (data as SelectOptions).value
                    );
                }}
                value={
                  formData.stateAddress
                    ? {
                        value: formData.stateAddress,
                        label: formData.stateAddress,
                      }
                    : undefined
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zipCodeAddress"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Zip Code <span className="text-red-500 px-1">*</span>
              </label>
              <input
                type="text"
                id="zipCodeAddress"
                name="zipCodeAddress"
                className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
                pattern="^[0-9]{5}(?:-[0-9]{4})?$"
                title="Enter a valid ZIP code"
                value={formData.zipCodeAddress}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>
          </fieldset>
          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Department <span className="text-red-500 px-1">*</span>
            </label>
            <CustomSelect
              id="department"
              name="department"
              options={optionsDepartment}
              onChange={(data) => {
                if (data)
                  handleInputChange(
                    "department",
                    (data as SelectOptions).value
                  );
              }}
              value={{
                value: formData.department,
                label: formData.department,
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Save
          </button>
        </form>
        <SubmitFormModal isOpen={displayModal} setIsOpen={setDisplayModal} />
      </div>
    );
}

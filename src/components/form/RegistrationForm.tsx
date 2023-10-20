'use client'

import { User, useEmployeeStore } from '@/store/UsersStore';
import { ChangeEvent, useEffect, useState } from 'react';
import SubmitFormModal from './SubmitFormModal';

export default function RegistrationForm() {

  const {users, addUser} = useEmployeeStore()
  
  const [displayModal, setDisplayModal] = useState(false)

  const [formData, setFormData] = useState<User>({
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '2000-01-01',
    startDate: '2023-01-01',
    streetAddress: '123 Main St',
    cityAddress: 'Anytown',
    stateAddress: 'Alabama',
    zipCodeAddress: '12345',
    departement: 'Alabama',
  });

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();

    // Utilisez la fonction addUser du store pour ajouter l'utilisateur
    addUser(formData);

    // Réinitialisez le formulaire
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      streetAddress: '',
      cityAddress: '',
      stateAddress: '',
      zipCodeAddress: '',
      departement: '',
    });

    setDisplayModal(true)
  };

  console.log('====');
  console.log('users',users);
  console.log('====');

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <form className="w-96 bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl text-center font-bold mt-4 mb-8">Create Employee</h2>
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Birth <span className="text-red-500 px-1">*</span>
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Start Date <span className="text-red-500 px-1">*</span>
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <fieldset className="border border-gray-300 p-4 rounded mt-4 mb-4">
          <legend className="text-lg text-gray-500 font-bold px-2"> Address </legend>
          <div className="mb-4">
            <label
              htmlFor="street"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Street <span className="text-red-500 px-1">*</span>
            </label>
            <input
              type="text"
              id="street"
              name="streetAddress"
              className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
              pattern="^[a-zA-Z0-9\s]+$"
              title="Only letters, numbers, and spaces are allowed"
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              City <span className="text-red-500 px-1">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="cityAddress"
              className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
              pattern="^[a-zA-Z\s]+$"
              title="Only letters and spaces are allowed"
              value={formData.cityAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              State <span className="text-red-500 px-1">*</span>
            </label>
            <select
              id="state"
              name="stateAddress"
              className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
              value={formData.stateAddress}
              onChange={() => handleInputChange}
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              {/* Ajoutez plus d'options d'États au besoin */}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="zipcode"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Zip Code <span className="text-red-500 px-1">*</span>
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipCodeAddress"
              className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
              pattern="^[0-9]{5}(?:-[0-9]{4})?$"
              title="Enter a valid ZIP code"
              value={formData.zipCodeAddress}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <div className="mb-4">
          <label
            htmlFor="departement"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            State <span className="text-red-500 px-1">*</span>
          </label>
          <select
            id="departement"
            name="departement"
            className="w-full px-3 py-2 rounded border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
            value={formData.departement}
            onChange={() => handleInputChange}
          >
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            {/* Ajoutez plus d'options d'États au besoin */}
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 rounded bg-lime-500 text-white font-bold hover:bg-lime-700 focus:outline-none focus:bg-lime-700"
        >
          Save
        </button>
      </form>
      {displayModal && <SubmitFormModal />}
    </div>
  )
}
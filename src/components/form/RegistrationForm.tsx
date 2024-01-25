'use client'

import { User, useEmployeeStore } from '@/store/UsersStore';
import { useEffect, useState } from 'react';
import SubmitFormModal from './SubmitFormModal';
import DatePickerForm from './DatePickerForm';
import statesData from '@/data/states.json';
import Select, { ActionMeta, GroupBase, StylesConfig } from 'react-select'
import StateManagedSelect from 'react-select';
import OptionTypeBase from "react-select"
import CustomSelect, { SelectOptions } from './CustomSelect';

const INITIAL_FORM_DATA = {
  id: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  streetAddress: '',
  cityAddress: '',
  stateAddress: '',
  zipCodeAddress: '',
  departement: '',
}

type OptionType = { [key: string]: any }

export default function RegistrationForm() {
  
  const states = statesData.states ;
  const {addUser} = useEmployeeStore()
  
  const [displayModal, setDisplayModal] = useState(false)
  const [setUp, setSetUp] = useState(false)

  const [formData, setFormData] = useState<User>({
    id: '0',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '2023-01-01',
    startDate: '2023-01-01',
    streetAddress: '123 Main St',
    cityAddress: 'Anytown',
    stateAddress: 'Alabama',
    zipCodeAddress: '12345',
    departement: 'Sales',
  });

  // Options du Select
  const optionsState = states.map((state) => ({ value: state, label: state }));

  const optionsDepartement = [
    { value: 'Sales', label: 'Sales'},
    { value: 'Marketing', label: 'Marketing'},
    { value: 'Engineering', label: 'Engineering'},
    { value: 'Humain Resources', label: 'Humain Resources'},
    { value: 'Legal', label: 'Legal'}
  ]

  const styleSelect: StylesConfig<OptionTypeBase> = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'rgb(132 204 22)' : 'grey',
    }),
    option: (baseStyles, state) => {
      return {
          ...baseStyles, 
          backgroundColor: state.isFocused ? "rgb(217 249 157)" : state.isSelected ? "rgb(132 204 22)" : '#fff',
          color: '#000',
      }
    }, 
  }

  useEffect(() => {
    setSetUp(true)
  }, [])

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();

    // La fonction addUser du store pour ajouter l'utilisateur
    addUser(formData);

    // Réinitialisez le formulaire
    setFormData(INITIAL_FORM_DATA);

    setDisplayModal(true)
  };

  if(setUp) return (
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
          <DatePickerForm id='dateOfBirth' handleInputChange={handleInputChange} valueProps={formData.dateOfBirth}/>
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Start Date <span className="text-red-500 px-1">*</span>
          </label>
          <DatePickerForm id='startDate' handleInputChange={handleInputChange} valueProps={formData.startDate}/>
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
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
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
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              State <span className="text-red-500 px-1">*</span>
            </label>
            <CustomSelect 
              id='state'
              options={optionsState} 
              onChange={(data) => {if(data) handleInputChange('stateAddress', (data as SelectOptions).value)}}
              value={formData.stateAddress ? { value: formData.stateAddress, label: formData.stateAddress } : undefined}
              />
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
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </fieldset>
        <div className="mb-4">
          <label
            htmlFor="departement"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Departement <span className="text-red-500 px-1">*</span>
          </label>
          <CustomSelect 
            id='departement'
            options={optionsDepartement} 
            onChange={(data) => {
              if (data) handleInputChange('departement', (data as SelectOptions).value)}
            }
            value={{ value: formData.departement, label: formData.departement }}
            />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 rounded bg-lime-500 text-white font-bold hover:bg-lime-700 focus:outline-none focus:bg-lime-700"
        >
          Save
        </button>
      </form>
      <SubmitFormModal
        isOpen={displayModal}
        setIsOpen={setDisplayModal}
      />
    </div>
  )
}
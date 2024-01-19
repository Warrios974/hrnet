'use client'

import { useEmployeeStore } from "@/store/UsersStore"
import { Table } from "@tyulan/custom-react-table"
import { TableColumn } from "@tyulan/custom-react-table/dist/types"

export default function Page() {
    const users = useEmployeeStore((state) => state.users)
    const columns: TableColumn[] = [
        {
            name: 'First name',
            key: 'firstName',
            selector: row => row.firstName,
        },
        {
            name: 'Last name',
            key: 'lastName',
            selector: row => row.lastName,
        },
        {
            name: 'Start Date',
            key: 'startDate',
            selector: row => row.startDate,
        },
        {
            name: 'Department',
            key: 'departement',
            selector: row => row.departement,
        },
        {
            name: 'Date of birth',
            key: 'dateOfBirth',
            selector: row => row.dateOfBirth,
        },
        {
            name: 'Street',
            key: 'streetAddress',
            selector: row => row.streetAddress,
        },
        {
            name: 'City',
            key: 'cityAddress',
            selector: row => row.cityAddress,
        },
        {
            name: 'State',
            key: 'stateAddress',
            selector: row => row.stateAddress,
        },
        {
            name: 'Zip code',
            key: 'zipCodeAddress',
            selector: row => row.zipCodeAddress,
        },
    ]
    console.log(users)
    return (
        <div className="mx-auto max-w-7xl py-6 px-6 lg:px-8 bg-white rounded-md">
            <Table 
                displaySearchBar={true}
                diplayEntries={true}
                displayInfoEntries={false}
                diplayFooterRow={false}
                listOfNumbersOfEntries={[2, 10, 25, 50]}
                classNameBtnNextAndPrevious='btn btn-primary mx-1'
                classNameBtnNumber='btn btn-secondary mx-1'
                classNameInput='input'
                classNamethHeader='border-b border-gray-400 font-semibold'
                classNametd='border-b border-gray-300 text-center py-2'
                columns={columns}
                data={users}
            />
        </div>
    )
  }
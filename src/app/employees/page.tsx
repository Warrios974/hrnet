'use client'

import { useEmployeeStore } from "@/store/UsersStore"
import { Table } from "@tyulan/custom-react-table"
import { TableColumn } from "@tyulan/custom-react-table/dist/types"

export default function Page() {
    const users = useEmployeeStore((state) => state.users)
    const columns: TableColumn[] = [
        {
            name: 'First Name',
            key: 'firstName',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
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
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Table 
                displaySearchBar={true}
                diplayEntries={true}
                displayInfoEntries={true}
                diplayFooterRow={false}
                listOfNumbersOfEntries={[2, 10, 25, 50]}
                columns={columns}
                data={users}
            />
        </div>
    )
  }
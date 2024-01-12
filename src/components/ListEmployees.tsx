'use client'

import { useEmployeeStore } from "@/store/UsersStore"


export default function ListEmployees() {

    const users = useEmployeeStore((state) => state.users)

    return (
        <div className="bg-white p-5 mt-4 rounded-md lg:flex lg:items-center lg:justify-between">
            {users.length > 0 && 
            <ul role="list" className="w-full divide-y divide-gray-100">
            {users.map((user, index) => (
                <li 
                    key={`${user.firstName}-${user.lastName}-${index}`} 
                    className="flex justify-between gap-x-6 py-2"
                >
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{user.firstName} {user.lastName}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.streetAddress}, {user.cityAddress}, {user.zipCodeAddress} - {user.stateAddress}</p>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{user.departement}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">{user.departement}</p>
                    </div>
                </li>
            ))}
            </ul>}
            {users.length === 0 && <span>No employees</span>}
        </div>
    )
}
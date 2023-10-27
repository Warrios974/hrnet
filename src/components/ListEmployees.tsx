'use client'

import { useEmployeeStore } from "@/store/UsersStore"


export default function ListEmployees() {

    const { users } = useEmployeeStore()

    console.log('====');
    console.log('users',users);
    console.log('====');

    return (
        <div className="bg-white p-5 mt-4 rounded-md lg:flex lg:items-center lg:justify-between">
            {users.length > 0 && <ul role="list" className="w-full divide-y divide-gray-100">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                    {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
                    </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">Last seen 3h ago</p>
                    </div>
                </li>
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                    {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Michael Foster</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">michael.foster@example.com</p>
                    </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Co-Founder / CTO</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">Last seen3h ago</p>
                    </div>
                </li>
            </ul>}
            {users.length === 0 && <span>No employees</span>}
        </div>
    )
}
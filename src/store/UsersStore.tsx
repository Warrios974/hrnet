import { create } from 'zustand'

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    startDate: string,
    streetAddress: string,
    cityAddress: string,
    stateAddress: string,
    zipCodeAddress: string,
    departement: string,
}

type Store = {
  users: User[] | []
  addUser: (user: User) => void
}

export const useEmployeeStore = create<Store>()((set) => ({
    users: [],
    addUser: (newUser: User) => set((state) => ({ users: [...state.users, newUser] })),
}))
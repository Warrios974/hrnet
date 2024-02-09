/**
 * This file contains the store for the users
 * Users are stored in a zustand store
 * @function useEmployeeStore
 * @returns { users } - The list of users
 * @returns { addUser } - The function to add a user to users
 */
import { create } from "zustand";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  streetAddress: string;
  cityAddress: string;
  stateAddress: string;
  zipCodeAddress: string;
  department: string;
};

type Store = {
  users: User[] | [];
  addUser: (user: User) => void;
};

export const useEmployeeStore = create<Store>()((set) => ({
  users: [],
  addUser: (newUser: User) =>
    set((state) => ({ users: [...state.users, newUser] })),
}));

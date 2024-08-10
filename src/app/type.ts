import { ReactNode } from "react";

export interface User {
    cell: ReactNode;
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: string;
    };
    email: string;
    dob: {
      date: string;
      age: number;
    };
    picture: {
      large: string;
    };
  }
  
  export interface UserResponse {
    results: User[];
  }
  
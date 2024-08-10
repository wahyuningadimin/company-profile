import { GetServerSideProps } from 'next';
import axios from 'axios';
import { UserResponse, User } from '../type';
import { Metadata } from "next"

import CookTeam from '../team-cook/page';
import Nutritionist from '../team-nutritionist/page';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "H&H | Our Team",
    description: "teams"
}

interface Props {
  users: User[];
}

const fetchUsers = async (): Promise<UserResponse> => {
  const response = await fetch('https://randomuser.me/api/?results=9');
  return response.json();
};

const OurTeamPage = async () => {
  const { results: users } = await fetchUsers();

  return (
    <>
    <div className="container mx-auto p-4 bg-stone-50">
            <div className="flex justify-center items-center">
                <h1 className="mt-5 pt-20 text-4xl font-bold">Our Team</h1>
            </div>

      <h2 className="mt-5 text-2xl font-semibold px-20 pt-10 text-center">Research & Development Team</h2>
      <ul className='list-none p-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-20 pt-5 pb-10'>
        {users.map((user, index) => (
          <li key={index} className='flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <Image width={20} height={20} src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className='w-20 h-20 rounded-full mr-4'/>
            <div className='text-center'>
            <p className='text-xl font-semibold'>{user.name.first} {user.name.last}</p>
            <p className='text-gray-600'>{user.cell}</p>
            <p className='text-gray-600 mt-1'>{user.email}</p>
          </div></li>
        ))}
      </ul>

      
    </div>
      <Nutritionist />
      <CookTeam />


    
</>

        
  );
};

export default OurTeamPage;
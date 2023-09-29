import Link from 'next/link'
import { studentInfo } from '../StudentInfo' 

export default function Page() {
  return (
    <main className='p-10'>
      <h1 className=" flex flex-col items-center text-4xl font-thick">
        My Shopping List
      </h1> 
      <p>
        {studentInfo()}
      </p>
    </main>
      );
    }
    
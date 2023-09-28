import Link from 'next/link'
import { studentInfo } from '../StudentInfo' 

export default function Page() {
  return (
    <div>
      <h1>
        My Shopping List
      </h1> 
      <p>
        {studentInfo()}
      </p>
    </div>
      );
    }
    
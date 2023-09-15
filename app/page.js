import { studentInfo } from "./StudentInfo"
import Link from 'next/link'
export default function Page() {
  return (
    <main>
      <h1>
        CPRG 306:Web Development 2 - assignments
      </h1>
      <p>
        {studentInfo()}
      </p>
      <Link href="/week2">Week 2</Link>
    </main>
  );
}        
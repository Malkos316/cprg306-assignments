import { studentInfo } from "./StudentInfo"
import Link from 'next/link'
export default function Page() {
  return (
    <main className=" p-10">
      <h1 className=" flex flex-col items-center text-3xl">
        CPRG 306:Web Development 2 - assignments
      </h1>
      <p>
        {studentInfo()}
      </p>
      <p>
        <Link href="/week2">Week 2</Link>
      </p>
      <p>
        <Link href="/week3">Week 3</Link>
      </p>
      <p>
        <Link href="/week4">Week 4</Link>
      </p>
    </main>
  );
}        
import { studentInfo } from "./StudentInfo"
import Link from 'next/link'
export default function Page() {
  return (
    <main className=" flex flex-col items-center text-center" >
      <h1 className=" flex flex-col items-center text-3xl p-10 bg-gradient-to-r from-black to-gray-600">
        CPRG 306:Web Development 2 - assignments
      </h1>
      <p>
        {studentInfo()}
      </p>
      <p className="m-1 hover:text-cyan-400" >
        <Link href="/week2">Week 2 ✔</Link>
      </p>
      <p className="m-1 hover:text-cyan-400" >
        <Link href="/week3">Week 3 ✔</Link>
      </p>
      <p className="m-1 hover:text-cyan-400" >
        <Link href="/week4">Week 4 ✔</Link>
      </p>
      <p className="m-1 hover:text-cyan-400" >
        <Link href="/week5">Week 5 ✔</Link>
      </p>
      <p className="m-1 hover:text-cyan-400" >
        <Link href="/week6">Week 6 🚧</Link>
      </p>
      <p className="m-1 hover:text-cyan-400" >
        <Link href="/week5Demo">Week 5 Demo</Link>
      </p>
    </main>
  );
}        
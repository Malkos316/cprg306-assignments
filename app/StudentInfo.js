import Link from 'next/link'
export function studentInfo() {
    return (
        <>
        <p>
            Student Name: Markus Luthi
        </p>
        <p>
            Course section: CPRG 306 A
        </p>
        <Link href="https://github.com/Malkos316/cprg306-assignments">Github Account</Link>
        </>
    );
}
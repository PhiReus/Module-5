import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Index1</h1>
      <h1 className="title">
        Read{" "}
        <Link href="/posts/first-post">
          this page!
        </Link>
      </h1>
    </div>
  )
}


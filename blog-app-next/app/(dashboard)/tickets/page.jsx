import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from "next/link"

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Blogs</h2>
          <p><small>Currently open blogs.</small></p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New Blog</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
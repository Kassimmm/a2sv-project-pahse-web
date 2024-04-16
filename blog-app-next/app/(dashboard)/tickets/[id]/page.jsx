import { notFound } from "next/navigation"
import Link from "next/link"

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()
 
  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, { 
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}



export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Blog Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created at {ticket.date}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority}
        </div> 
      </div>

      <Link href={`/tickets/edit/${ticket.id}`} className="ml-auto">
        <button className="btn-primary" >
          <span>Edit Blog</span>
        </button>
      </Link>
    </main>
  )
}
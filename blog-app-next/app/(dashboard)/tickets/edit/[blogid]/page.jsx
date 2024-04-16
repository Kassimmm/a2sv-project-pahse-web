import { notFound } from "next/navigation"
import EditForm from "../EditForm"
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

  
export default async function EditBlgPage({params}) {
    const newid = params.blogid
    const ticket = await getTicket(newid)
    
  return (
    <EditForm ticket={ticket}>
    </EditForm>
  )
}

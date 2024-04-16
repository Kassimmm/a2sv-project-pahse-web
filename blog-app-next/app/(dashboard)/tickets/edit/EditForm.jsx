"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Make sure to import useRouter

export default function EditForm(props) {
  const { ticket } = props;
  const router = useRouter(); // Use the useRouter hook to access the router object

  const [title, setTitle] = useState(ticket.title);
  const [body, setBody] = useState(ticket.body);
  const [priority, setPriority] = useState(ticket.priority);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const updatedTicket = {
      id: ticket.id,
      title: title,
      body: body,
      priority: priority,
      date: new Date().toUTCString(),
    };

    // Send the updated ticket data to the backend
    fetch(`http://localhost:4000/tickets/${ticket.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTicket),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // alert('Ticket updated successfully');
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error updating ticket:', error);
      setError('Failed to update ticket. Please try again.');
      setIsLoading(false);
    });

    router.refresh()
    router.push('/tickets')
  }

  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="personal">Personal</option>
          <option value="specialized">Specialized</option>
          <option value="business">Business</option>
        </select>
      </label>
      <button type="submit" className="btn-primary" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Changes'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}
